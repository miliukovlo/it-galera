import React from 'react';
import styles from './Progress.module.css'
import { Progress } from "rsuite";

const ProgressBlock = () => {
    return (
        <div className={styles.temp}>
				<p>Общая успеваемость:</p>
				<Progress.Line
					percent={90}
					strokeColor="blue"
					trailColor="lightgrey"
					strokeWidth={4}
					vertical={false}
				/>
			</div>
    );
}

export default ProgressBlock;
