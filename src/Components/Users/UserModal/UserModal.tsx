import styles from "./UserModal.module.css";

interface userModalInterface {
  isOpen: boolean;
  onClose: () => void;
  subject_name: string;
}

const UserModal = ({ isOpen, onClose, subject_name }: userModalInterface) => {
  return (
    <div className={isOpen ? styles.userModalContainer : styles.hideModal}>
      <div onClick={onClose} className={styles.outerModal}></div>
      <div className={styles.userModalWrapper}>
        <div className={styles.useModalContent}>
          <div className={styles.infoBlock}>{subject_name}</div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
