/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';

import {
  getExpertDetailParticipant,
  getExpertListFilesFolder,
  getInfoParticipant,
  getExpertAssessmentsParticipant,
  ExpertGetDetailParticipantResponse,
  ListCourseFilesResponse,
  PhaseFolders,
  Params,
} from 'apis/requests/expertdetailparticipant';
import BreadcrumbItem from 'components/atoms/BreadcrumbItem';
import Button from 'components/atoms/Button';
import Loading from 'components/atoms/Loading';
import ScrollToButton from 'components/atoms/ScrollToButton';
import Text from 'components/atoms/Text';
import Breadcrumb from 'components/molecules/Breadcrumb';
import FileInfo from 'components/molecules/FileInfo';
import Folder from 'components/molecules/Folder';
import Textarea from 'components/molecules/Textarea';
import FrameCarousel, { FrameCarouselItem } from 'components/organisms/FrameCarousel';
import ScoreProcessTable from 'components/organisms/ScoreProcessTable';
import SiteLayout from 'components/organisms/SiteLayout';
import ProfileBanner from 'components/templates/ProfileBanner';
import { formatBytes, getThumnailFile } from 'function/utils';
import { DataAssessmentCourseResponse, PhaseAssessment } from 'reducers/detailcourse/criteria/types';
import { ParticipantItemType } from 'reducers/listparticipants/types';


const schema = yup.object().shape({
});
const ExpertScoreProcess: React.FC = () => {
  const [phaseActive, setPhaseActive] = useState<PhaseAssessment>();
  const [idPhaseActive, setIdPhaseActive] = useState<string | number>('');
  const [nameFolderActive, setNameFolderActive] = useState('');
  const [isShowListFiles, setShowListFiles] = useState(false);
  const { courseSlug, phaseSlug, participantId } = useParams() as Params;
  const [dataParticipant, setDataParticipant] = useState<ExpertGetDetailParticipantResponse>();
  const [listFiles, setListFiles] = useState<ListCourseFilesResponse[]>();
  const [dataAssessment, setDataAssessment] = useState<DataAssessmentCourseResponse>();
  const [infoParticipant, setInfoParticipant] = useState<ParticipantItemType>();
  const owlClass = 'p-exportScoreProcess';
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const findPhaseActive = (data: DataAssessmentCourseResponse, idPhase: number | string):
    PhaseAssessment | undefined => {
    const phase = data && data.listPhases
      .find((item) => item.phasesTranslations[0].id === idPhase);
    if (phase) return phase;
    return data.listPhases[data.listPhases.length - 1];
  };
  const handleChangePhase = (idPhase: number | string): void => {
    setIdPhaseActive(idPhase);
    if (dataAssessment) {
      setPhaseActive(findPhaseActive(dataAssessment, idPhase));
    }
  };
  const handleGetListFiles = (item: PhaseFolders): void => {
    (async (): Promise<void> => {
      try {
        const dataListFilesResponse = await getExpertListFilesFolder(
          { participantId, folderId: item.id },
        );
        setListFiles(dataListFilesResponse);
        setNameFolderActive(item.name);
        setShowListFiles(true);
      } catch (error) {
        console.log(error);
      }
    })();
  };
  useEffect(() => {
    const requestDetail = (): void => {
      try {
        getExpertDetailParticipant(
          { courseSlug, phaseSlug, participantId },
        ).then((result) => setDataParticipant(result));
        getExpertAssessmentsParticipant({
          courseSlug, participantId,
        }).then((result) => {
          setDataAssessment(result);
          setIdPhaseActive(3);
          setPhaseActive(findPhaseActive(result, 3));
        });
        getInfoParticipant({ participantId })
          .then((result) => {
            setInfoParticipant(result);
          });
      } catch (error) {
        console.log(error);
      }
    };
    requestDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [fileViewer, setFileViewer] = useState({
    isViewer: false,
    fileView: {},
    numberInitialSlide: -1,
  });
  const onHandleShowFileViewer = (value: boolean): void => {
    setFileViewer({
      ...fileViewer,
      isViewer: value,
      fileView: {},
      numberInitialSlide: -1,
    });
  };
  const handleClickItem = (id: number): void => {
    const indexFile = listFiles && listFiles.findIndex((item) => item.id === id);
    if (indexFile || indexFile === 0) {
      setFileViewer({
        ...fileViewer,
        isViewer: true,
        numberInitialSlide: indexFile,
      });
    }
  };
  return (
    <div className={owlClass}>
      <Loading />
      <SiteLayout>
        <div className={`${owlClass}_wrap_breadCrumb`}>
          <Breadcrumb>
            <BreadcrumbItem href="#">Course</BreadcrumbItem>
            <BreadcrumbItem href={`/expert/courses/${courseSlug}`}>{courseSlug}</BreadcrumbItem>
            <BreadcrumbItem href={`/expert/courses/${courseSlug}/${phaseSlug}`}>{phaseSlug}</BreadcrumbItem>
            <BreadcrumbItem>Examination</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <FormProvider {...methods}>
          <form noValidate>
            <Row>
              <Col className={`${owlClass}_wrap_content`}>

                <div className={`${owlClass}_wrap_profileBanner`}>
                  {infoParticipant && phaseActive && (
                    <ProfileBanner profile={{
                      email: infoParticipant.email,
                      dob: moment(infoParticipant.dob).format('L'),
                      studentId: '0123445576',
                      occupations: infoParticipant.occupation || 'Student',
                      examiner: phaseActive.assessment && phaseActive.assessment.expert ? phaseActive.assessment.expert.firstName : '',
                      mark: phaseActive.assessment ? phaseActive.assessment.avgScore : '',
                      scoringDate: '17.07.2020 - 18.07.2020',
                    }}
                    />
                  )}
                </div>

                <div className={`${owlClass}_wrap_folders`}>
                  {!isShowListFiles ? <Text>{'Participant\'s Assessments Folder'}</Text>
                    : (
                      <Button
                        handleClick={(): void => setShowListFiles(false)}
                        modifiers={['white']}
                        iconName="angle-left"
                      >
                        {nameFolderActive}
                      </Button>
                    )}
                  <div className={`${owlClass}_wrap_folders_list ${isShowListFiles ? 'clear-flex' : ''}`}>
                    {!isShowListFiles && dataParticipant && dataParticipant.phaseFolders
                      && dataParticipant.phaseFolders.map((item, index) => (
                        <Folder
                          key={`t-courseFolder_list_${index.toString()}`}
                          id={item.id}
                          label={item.name}
                          handleClick={(): void => handleGetListFiles(item)}
                        />
                      ))}
                    {isShowListFiles && listFiles && listFiles.map((item, index) => (
                      <FileInfo
                        handleClick={(): void => handleClickItem(item.id)}
                        key={`list_files${index.toString()}`}
                        name={item.name}
                        size={`${formatBytes(item.size)} `}
                        thumnail={getThumnailFile(item.extension)}
                      />
                    ))}
                  </div>
                </div>
                <div className={`${owlClass}_wrap_scores`}>
                  <div className={`${owlClass}_wrap_scores_title`}>
                    <div className={`${owlClass}_title_left`}>
                      <Text>PATF Course Assessment</Text>
                      <div className={`${owlClass}_title_left_line`} />
                    </div>
                    <div className={`${owlClass}_title_right`}>
                      <Text>{'PATF Phase\'s Mark'}</Text>
                      <div className={`${owlClass}_title_right_line`} />
                    </div>
                  </div>
                  {dataAssessment
                    && (
                      <ScoreProcessTable
                        dataScoreTable={dataAssessment}
                        activePhase={idPhaseActive}
                        handleChangePhase={handleChangePhase}
                      />
                    )}
                </div>
                <div className={`${owlClass}_right`}>
                  <div className={`${owlClass}_right_feedback`}>
                    <Text>Expert Comments</Text>
                    <div className={`${owlClass}_right_feedback_phase`}>
                      {dataAssessment
                        && dataAssessment.listPhases
                        && dataAssessment.listPhases.map((item, index) => (
                          <div key={`expert_comments${index.toString()}`} className={`${owlClass}_right_feedback_phase_comment ${'available'}`}>
                            <Text>{`Phase ${item.phasesTranslations[0].name}`}</Text>
                            <Textarea
                              disabled={!(idPhaseActive === item.phasesTranslations[0].phaseId)
                                || !!(item.assessment && item.assessment.expertComment)}
                              name={`expertCommentPhase${item.phasesTranslations[0].phaseId}`}
                              defautValue={item.assessment ? item.assessment.expertComment : ''}
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className={`${owlClass}_right_comments`}>
                    <Text>{'PATF\'s Expert final comments'}</Text>
                    <div className={`${owlClass}_right_comments_phase`}>
                      <Textarea
                        name="expertComment"
                        defautValue="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At "
                      />
                    </div>
                  </div>
                  <div className={`${owlClass}_right_complete_phase`}>
                    <Button
                      modifiers={['white', 'ovalFill', 'uppercase', 'bold', 'shadow']}
                      type="submit"
                    >
                      COMPLETE PHASE
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </form>
        </FormProvider>
        <ScrollToButton />
      </SiteLayout>
      {
        listFiles
        && (
          <FrameCarousel
            isShow={fileViewer.isViewer}
            handleShowFile={onHandleShowFileViewer}
            numberInitialSlide={fileViewer.numberInitialSlide}
          >
            {
              listFiles.map((file) => (
                <FrameCarouselItem
                  key={file.id}
                  data={file}
                />
              ))
            }
          </FrameCarousel>
        )
      }
    </div>
  );
};

export default ExpertScoreProcess;
