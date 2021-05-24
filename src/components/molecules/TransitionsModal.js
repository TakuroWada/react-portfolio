import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  workLink: {
    maxWidth: "380px",
    width: "100%",
    margin: "24px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
      margin: "24px auto",
    },
  },
  workTitle: {
    minHeight: "36px",
  },
  workImg: {
    maxWidth: "380px",
    width: "100%",
    height: "200px",
    objectPosition: "top center",
    objectFit: "cover",
    borderRadius: "8px",
    cursor: "pointer",
    padding: "8px",
    "&:hover": {
      opacity: "0.8",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
      margin: "0 auto",
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
    padding: "128px 40px 16px 40px ",
    boxSizing: "border-box",
    overflowY: "scroll",
    maxHeight: "750px",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      maxHeight: "620px",
      margin: "0 16px",
      padding: "88px 16px 16px 16px",
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
    height: "100px",
    objectPosition: "0 0",
    objectFit: "cover",
    borderRadius: "8px 8px 0 0",
    "&:hover": {
      opacity: "0.8",
    },
    [theme.breakpoints.down("sm")]: {
      height: "80px",
    },
  },
  modalTitle: {
    fontSize: "20px",
    padding: "8px 0",
    marginBottom: "16px",
    borderBottom: "2px solid #fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  modallistItem: {
    paddingBottom: "32px",
  },
  modalUrl: {
    color: "#BEF0FF",
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
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
    [theme.breakpoints.down("sm")]: {
      maxHeight: "200px",
      overflowY: "auto",
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

  console.log(props);
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
