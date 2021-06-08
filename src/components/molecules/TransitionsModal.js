import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  workLink: {
    maxWidth: "100%",
    margin: "24px auto",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "380px",
      width: "100%",
      margin: "24px",
    },
  },
  workTitle: {
    whiteSpace: "pre-wrap",
    [theme.breakpoints.up("sm")]: {
      minHeight: "36px",
    },
  },
  workImg: {
    maxWidth: "100%",
    width: "100%",
    height: "220px",
    objectPosition: "top center",
    objectFit: "cover",
    cursor: "pointer",
    paddingTop: "8px",
    margin: "0 auto",
    "&:hover": {
      opacity: "0.8",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "380px",
      margin: "0",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "800px",
    width: "100%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      marginTop: "60px",
    },
  },
  paper: {
    position: "relative",
    backgroundColor: "#272C34",
    color: "#fff",
    borderRadius: "8px",
    boxSizing: "border-box",
    overflowY: "scroll",
    fontSize: "14px",
    maxHeight: "620px",
    height: "auto",
    margin: "0 16px",
    padding: "88px 16px 16px 16px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
      maxHeight: "750px",
      margin: "0",
      padding: "128px 40px 16px 40px ",
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  clocelink: {
    position: "fixed",
    top: "8px",
    right: "8px",
    cursor: "pointer",
    color: "#333",
    background: "#fff",
    padding: "8px",
    borderRadius: "8px",
  },

  thumbnail: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "80px",
    objectPosition: "0 0",
    objectFit: "cover",
    borderRadius: "8px 8px 0 0",
    "&:hover": {
      opacity: "0.8",
    },
    [theme.breakpoints.up("sm")]: {
      height: "100px",
    },
  },
  modalTitle: {
    fontSize: "14px",
    padding: "8px 0",
    marginBottom: "16px",
    borderBottom: "2px solid #fff",
    whiteSpace: "pre-wrap",
    [theme.breakpoints.up("sm")]: {
      whiteSpace: "normal",
      fontSize: "20px",
    },
  },
  modallistItem: {
    paddingBottom: "32px",
    whiteSpace: "pre-wrap",
  },
  modalUrl: {
    color: "#BEF0FF",
    fontSize: "14px",
    whiteSpace: "pre-wrap",
    [theme.breakpoints.up("sm")]: {
      fontSize: "20px",
    },
  },
  itemHed: {
    display: "inline-block",
    fontWeight: "bold",
    color: "#BEF0FF",
    margin: "0 8px 8px 0",
  },
  modalDateil: {
    display: "block",
    padding: "16px",
    lineHeight: "1.6",
    border: "1px solid #fff",
    whiteSpace: "pre-wrap",
    maxHeight: "200px",
    overflowY: "auto",
    [theme.breakpoints.up("sm")]: {
      maxHeight: "auto",
    },
  },
}));

const TransitionsModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* 開く */}
      <div className={classes.workLink}>
        <h3 className={classes.workTitle} onClick={handleOpen}>
          {props.info.title}
        </h3>
        <img
          src={props.info.img}
          className={classes.workImg}
          alt={props.info.title}
          onClick={handleOpen}
        />
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {/* 中身 */}
          <div className={classes.paper}>
            <span className={classes.clocelink} onClick={handleClose}>
              閉じる
            </span>
            <a href={props.info.url} target="blank">
              <img
                src={props.info.img}
                className={classes.thumbnail}
                alt={props.info.title}
              />
            </a>

            <h2 id="transition-modal-title" className={classes.modalTitle}>
              {props.info.title}
            </h2>
            <ul className={classes.modallist}>
              <li
                id="transition-modal-description"
                className={classes.modallistItem}
              >
                <a
                  className={classes.modalUrl}
                  href={props.info.url}
                  target="blank"
                >
                  {props.info.url}
                </a>
              </li>
              <li
                id="transition-modal-description"
                className={classes.modallistItem}
              >
                <span className={classes.itemHed}>[ 制作期間 ]</span>
                {props.info.period}
              </li>
              <li
                id="transition-modal-description"
                className={classes.modallistItem}
              >
                <span className={classes.itemHed}>[ 規模 ]</span>
                {props.info.scale}
              </li>
              <li
                id="transition-modal-description"
                className={classes.modallistItem}
              >
                <span className={classes.itemHed}>[ ポジション ]</span>
                <br />
                {props.info.position}
              </li>
              <li
                id="transition-modal-description"
                className={classes.modallistItem}
              >
                <span className={classes.itemHed}>[ 使用技術 ]</span>
                <br />
                {props.info.technology}
              </li>
            </ul>
            <span className={classes.itemHed}>[ ポイント ]</span>
            <taxtarea className={classes.modalDateil}>
              {props.info.detail}
            </taxtarea>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
