import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { cmsHttp } from 'apis/instance';
import postAcceptPolicy from 'apis/requests/acceptpolicy';
import Button from 'components/atoms/Button';
import Loading from 'components/atoms/Loading';
import ReturnButton from 'components/atoms/ReturnButton';
import ScrollToButton from 'components/atoms/ScrollToButton';
import Text from 'components/atoms/Text';
import Banner from 'components/organisms/Banner';
import CardCourse from 'components/organisms/CardCourse';
import ModalTermPolicy from 'components/organisms/ModalTermPolicy';
import SiteLayout from 'components/organisms/SiteLayout';
import { requestGetListCourses, resetListCourses } from 'reducers/pages/courses/action';
import { ListCoursesRequest, Account } from 'reducers/pages/courses/types';
import useSelector from 'selectors/useSelector';

const Overview: React.FC = () => {
  const owlClass = 'p-overview';
  const history = useHistory();
  const dispatch = useDispatch();
  const { data, loading, meta } = useSelector((state) => state.pages.courses);
  const { user } = useSelector((state) => state.auth);
  const [pagination, setPagination] = useState<ListCoursesRequest>({
    pageNumber: 1,
    pageSize: 12,
  });

  useEffect(() => {
    dispatch(requestGetListCourses(pagination));

    return (): void => {
      dispatch(resetListCourses());
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [showModalPolicy, setShowModalPolicy] = useState(false);
  const [check, setCheck] = useState<boolean>(false);
  const [infoCourse, setInfoCourse] = useState<{slugCourse: string; idCourse: number}>();
  const onHandleShowMore = (): void => {
    const moreListCourses: ListCoursesRequest = {
      pageNumber: pagination.pageNumber + 1,
      pageSize: 12,
    };
    dispatch(requestGetListCourses(moreListCourses));
    setPagination(moreListCourses);
  };
  const handleCheckPolicy = (value: Account[] | [] | null, params: {slugCourse: string; idCourse: number}): void => {
    if (!(value && value.length > 0)) {
      setInfoCourse(params);
      setShowModalPolicy(true);
    } else {
      history.push(`/participant/course/${params.slugCourse}`);
    }
  };
  const handleStartCourse = async (): Promise<void> => {
    if (infoCourse && check) {
      const response = await postAcceptPolicy({ courseId: infoCourse.idCourse });
      if (typeof response === 'boolean' && response) {
        history.push(`/participant/course/${infoCourse.slugCourse}`);
      }
    }
  };
  return (
    <div className={owlClass}>
      <Loading iShow={loading} />
      <ModalTermPolicy
        isCheck={check}
        handleChangeCheck={(): void => setCheck(!check)}
        handleHide={(): void => setShowModalPolicy(false)}
        handleStartCourse={handleStartCourse}
        isShowModalTermPolicy={showModalPolicy}
        hrefTermConditions="/"
        hrefPrivacy="/"
      />
      <SiteLayout>
        <div className={`${owlClass}_wrap_back_button`}>
          <ReturnButton>Return to the Course Page</ReturnButton>
        </div>
        <Banner
          heading={`Welcome Back ${(user && user.lastName)
            || (user && user.firstName)
            || ''}`}
          imgSrc={(user && `${cmsHttp}${user.image}`) || ''}
        />
        <Text>
          Your Courses (
          {data && data.length}
          )
        </Text>
        <Row>
          {data
            && data.map((item) => {
              const startDate = new Date(item.startDate);
              const endDate = new Date(item.endDate);
              const nowDate = new Date();

              let isUnavailable = true;
              if (nowDate > startDate && nowDate < endDate) {
                isUnavailable = false;
              }
              return (
                <Col
                  xs="6"
                  md="4"
                  lg="3"
                  xl="2"
                  className={`${owlClass}_wrap_card_course`}
                >
                  <div className="item_card_course">
                    <CardCourse
                      description={item.courseTranslations[0].description}
                      unavailable={isUnavailable}
                      imgSrc={`${cmsHttp}${item.image}`}
                      modifiers={['full-image']}
                      title={item.courseTranslations[0].name}
                      handleClick={(): void => handleCheckPolicy(item.accounts,
                        { slugCourse: item.courseTranslations[0].slug, idCourse: item.courseTranslations[0].courseId })}
                    />
                  </div>
                </Col>
              );
            })}
        </Row>
        {data && meta && data.length < meta.totalRecords && (
          <div className={`${owlClass}_wrap_button_view_more`}>
            <Button
              modifiers={['white', 'ovalFill']}
              href=""
              handleClick={onHandleShowMore}
            >
              VIEW MORE
            </Button>
          </div>
        )}
        <ScrollToButton />
      </SiteLayout>
    </div>
  );
};

export default Overview;