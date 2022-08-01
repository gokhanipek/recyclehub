import React from 'react'
import styles from './ProgressBar.module.scss';

import full from './../../assets/full.png';
import empty from './../../assets/empty.png';
import { getPercentage } from '../../utils/utils';

interface Props {
    recoveredQuantity: number;
    unassignedQuantityTotal: number;
}

const ProgressBar: React.FC<Props> = ({ recoveredQuantity, unassignedQuantityTotal }) => {

    const percentage: number = getPercentage(recoveredQuantity, unassignedQuantityTotal);
    const percentageInBottles: number = Math.floor(percentage/10); 

    const fullBottlesArray = [...Array(percentageInBottles)].map(item => 0);
    const emptyBottlesArray = [...Array(10-percentageInBottles)].map(item => 0);

    return (
        <div className={styles.percentage_wrapper}>
            <div className={styles.card_content_line}>Progress: {percentage}%</div>
            <div className={styles.percentage}>
                {fullBottlesArray.map((item, index) => <img key={index} src={full} alt="a full bottle" /> )}
                {emptyBottlesArray.map((item, index) => <img key={index} src={empty} alt="an empty bottle" /> )}
            </div>
        </div>
    )
}

export default ProgressBar