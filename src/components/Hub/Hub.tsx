import React from 'react'
import styles from "./Hub.module.scss";
import { HubsResponse } from '../../types/types';
import ProgressBar from '../ProgressBar/ProgressBar';

interface Props {
  hub: HubsResponse
}

const Hub: React.FC<Props> = ({ hub }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_top}>
        {!!hub.logo && <img src={hub.logo.thumbnailDirectLink} alt={`logo of ${hub.name}`} />}
        <h1 className={styles.card_title}>{hub.displayName}</h1>
        <span>{hub.location}</span>
      </div>
      <div className={styles.card_content}>
        <div className={styles.card_content_details}>
          <div className={styles.card_content_line}>
            <div className={`${styles.portfolio} ${hub.parentHubName ? styles.check : styles.cross}`}> Portfolio </div>
          </div>
          <div className={styles.card_content_line}><span className={styles.name}>{hub.displayName}</span><span className={styles.type}>{hub.type}</span></div>
          <ProgressBar
            recoveredQuantity={hub.recoveredQuantity}
            unassignedQuantityTotal={hub.unassignedQuantityTotal} />
          <a className={styles.card_externalLink} target="_blank" rel="noreferrer noopener" href={`https://test.cleanhub.com/hub/${hub.slug}`}>
            <div className={styles.textWrapper}>
              <span className={styles.hiddenText}>Check Hub's Page</span>
              <span className={styles.visibleText}>Details</span>
            </div>
          </a>
        </div>
        <div className={styles.card_content_info} style={{ backgroundImage: `url(${hub.cardImage.directLink})` }}>
          <span>{hub.collectionAndSortingParagraph}</span>
        </div>
      </div>
    </div>
  )
}

export default Hub