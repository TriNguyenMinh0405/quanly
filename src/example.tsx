import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';

import { cmsHttp } from 'apis/instance';
import getListCourses from 'apis/requests/courses';
import Button from 'components/atoms/Button';
import { IconName } from 'components/atoms/Icon';
import Input from 'components/atoms/Input';
import Loading from 'components/atoms/Loading';
import ScrollToButton from 'components/atoms/ScrollToButton';
import Text from 'components/atoms/Text';
import CardCourse from 'components/organisms/CardCourse';
import ExpertBanner from 'components/organisms/ExpertBanner';
import SiteLayout from 'components/organisms/SiteLayout';
import useDebounce from 'hooks/useDebounce';
import {
  DataListCoursesResponse,
  ListCoursesRequest,
  MetaListCoursesResponse,
} from 'reducers/pages/courses/types';
import useSelector from 'selectors/useSelector';

type SearchForm = {
  search: string;
};
const ExpertCourses: React.FC = () => {
  const user = useSelector((state) => state.auth.user);
  const methods = useForm<SearchForm>();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [pageLoading, setPageLoading] = useState(false);
  const defaultParams: ListCoursesRequest = {
    pageNum: 1,
    pageSize: 2,
  };
  const [paramsCourses, setParamsCourses] = useState<ListCoursesRequest>(defaultParams);
  const [listCourse, setListCourse] = useState<DataListCoursesResponse[]>([]);
  const [paginationCourse, setPaginationCourse] = useState<MetaListCoursesResponse | null>();
  const [statusSearch, setStatusSearch] = useState({ status: false, icon: 'search' });
  const requestGetListCourse = async (params: ListCoursesRequest): Promise<void> => {
    try {
      setPageLoading(true);
      const { data, meta } = await getListCourses(
        { ...params, searchText: searchTerm || undefined },
      );
      setListCourse(data);
      setPaginationCourse(meta);
      setPageLoading(false);
    } catch (error) {
      setPageLoading(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      setStatusSearch({ status: true, icon: 'cancel' });
    } else {
      setStatusSearch({ status: false, icon: 'search' });
    }
  };
  const handleClickSearch = (): void => {
    if (!statusSearch.status) {
      setStatusSearch({ status: true, icon: 'search' });
    } else {
      setStatusSearch({ status: false, icon: 'search' });
      methods.setValue('search', '');
      setSearchTerm('');
    }
  };
  const handleViewMore = (): void => {
    const moreQueryParams: ListCoursesRequest = {
      ...defaultParams,
      pageNum: paramsCourses.pageNum + 1,
    };
    (async (): Promise<void> => {
      setPageLoading(true);
      try {
        const { data } = await getListCourses(
          {
            ...moreQueryParams,
            searchText: searchTerm || undefined,
          },
        );
        setParamsCourses(moreQueryParams);
        setListCourse([...listCourse, ...data]);
        setPageLoading(false);
      } catch (error) {
        setPageLoading(false);
      }
    })();
  };
  useEffect(() => {
    setParamsCourses(defaultParams);
    if (debouncedSearchTerm && searchTerm) {
      requestGetListCourse(defaultParams);
    } else if (!pageLoading) {
      requestGetListCourse(defaultParams);
    }
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [debouncedSearchTerm]);
  useEffect(() => {
    requestGetListCourse(defaultParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="p-expertcourse">
      <Loading iShow={pageLoading} />
      <SiteLayout>
        <div className="p-expertcourse_banner">
          <ExpertBanner
            imgSrc={user && user.image ? cmsHttp + user.image : undefined}
            heading={`Hello, ${user && user.firstName + user.lastName}`}
            description="Welcome back. How are you today"
          />
        </div>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <FormProvider {...methods}>
          <form>
            <div className={`p-expertcourse_search ${statusSearch.status ? 'active' : ''}`}>
              <Text size="fs24-lg" weight="bold" modifiers={['brand-blue-dark']}>
                Your Lastest Courses
              </Text>
              <div className="p-expertcourse_searchInput">
                <Input
                  iconName={statusSearch.icon as IconName}
                  handleSearch={handleClickSearch}
                  handleChange={handleChange}
                  name="search"
                  type="text"
                  placeholder="Search course"
                  modifiers={['search']}
                />
              </div>
            </div>
          </form>
        </FormProvider>
        {listCourse && listCourse.length > 0 ? (
          <div>
            <Row>
              {listCourse.map((item, index) => (
                <Col
                  key={`card_course_${index.toString()}`}
                  xs="6"
                  md="4"
                  lg="3"
                  xl="2"
                  className="p-expertcourse_cardContainer"
                >
                  <CardCourse
                    title={item.courseTranslations[0].name}
                    link={`/expert/courses/${item.courseTranslations[0].slug}`}
                    description={item.courseTranslations[0].description}
                    imgSrc={`${cmsHttp}${item.image}`}
                    modifiers={['full-image']}
                  />
                </Col>
              ))}
            </Row>
            {listCourse && paginationCourse
              && listCourse.length < paginationCourse.totalRecords && (
                <div className="p-expertcourse_viewmore">
                  <Button
                    type="button"
                    modifiers={['white', 'bold', 'ovalFill']}
                    handleClick={handleViewMore}
                  >
                    VIEW MORE
                  </Button>
                </div>
            )}
          </div>
        ) : (
          <div className="p-expertcourse_emptytext">
            <Text weight="bold" modifiers={['center']}>
                Empty Courses
            </Text>
          </div>
        )}
        <ScrollToButton />
      </SiteLayout>
    </div>
  );
};

export default ExpertCourses;
