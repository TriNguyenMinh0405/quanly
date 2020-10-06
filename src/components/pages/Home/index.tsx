import moment from 'moment';
import React from 'react';
import { customModifier } from 'functions';
import { Container } from 'react-bootstrap';
import MainCarousel from 'components/organisms/MainCarousel';
import MovieCarousel from 'components/organisms/MovieCarousel';
interface Phase {
    startDate: string;
    endDate: string;
    startOfAssessment: string;
    endOfAssessment: string;
    name: string;
}
interface ListPhases {
    phases: Phase[];
}
interface TimeCountDown {
    startDate: string;
    endDate: string;
    endOfAssessment: string;
    name: string;
    type: number;
}
const Home: React.FC = (props) => {
    const data = {
        phases: [
            {
                startDate: '2020-09-01T00:01:13+07:00',
                endDate: '2020-09-05T00:01:13+07:00',
                startOfAssessment: '2020-09-21T00:01:13+07:00',
                endOfAssessment: '2020-09-22T00:01:13+07:00',
                name: 'phase 1',
            },
            {
                startDate: '2020-10-03T00:01:13+07:00',
                endDate: '2020-10-6T00:01:13+07:00',
                startOfAssessment: '2020-10-06T00:01:13+07:00',
                endOfAssessment: '2020-10-10T00:01:13+07:00',
                name: 'phase 2',
            },
        ],
    };
    const compareTimestamp = (listPhase: ListPhases): TimeCountDown | null => {
        let timeNow = moment().valueOf();
        if (listPhase && listPhase.phases) {
            listPhase.phases.forEach((item) => {
                if (moment(item.endDate).valueOf() >= timeNow) {
                    console.log('now:', moment().valueOf());
                    console.log(moment(item.endDate).valueOf());
                    return {
                        startDate: item.startDate,
                        endDate: item.endDate,
                        endOfAssessment: item.endOfAssessment,
                        name: item.name,
                        type: 1,
                    };
                } else if (moment(item.endOfAssessment).valueOf() >= timeNow) {
                    console.log('jgsjsgjgss');
                    console.log(item.name);
                    return {
                        startDate: item.startDate,
                        endDate: item.endDate,
                        endOfAssessment: item.endOfAssessment,
                        name: item.name,
                        type: 2,
                    };
                }
            });
        }
        return null;
    };
    console.log(compareTimestamp(data));
    return (
        <div
            className={customModifier('p-home')}
            style={{ background: '#040917' }}
        >
            <Container>
                <MainCarousel />

                <MovieCarousel />
                <div style={{ height: '100px', background: 'green' }}>
                    {compareTimestamp(data) && compareTimestamp(data)!.name}
                </div>
            </Container>
        </div>
    );
};
export default Home;
