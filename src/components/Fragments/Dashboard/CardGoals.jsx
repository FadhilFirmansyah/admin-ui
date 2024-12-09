import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import Card from '../../Elements/Card';
import goals from '../../../data/goals';

const CardGoals = () => {
    const goalTarget = goals.finish;
    const goalAchieved = goals.current;
    const gaugeValue = (goalAchieved / goalTarget) * 100;

    return (
        <Card 
            title="Goals"
            desc={
                <Stack spacing={2}>
                    <Stack direction="row" justifyContent="space-between">
                        <span>Target Achieved</span>
                        <span>${goalAchieved.toLocaleString()}</span>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <span>This Month Target</span>
                        <span>${goalTarget.toLocaleString()}</span>
                    </Stack>

                    <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
                        <Gauge
                            value={gaugeValue}
                            max={100}
                            thickness={14}
                            startAngle={-90}
                            endAngle={90}
                            labels={({ value }) => `${Math.round(value)}%`}
                            style={{ width: '150px', height: '150px' }}
                        />
                    </div>
                </Stack>
            }
        />
    );
};

export default CardGoals;
