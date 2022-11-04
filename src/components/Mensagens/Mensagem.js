import React,{useState, useEffect} from "react";

import styles from'./style.css'

const Mensagem = ({type, msg})=>{
  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    if(!msg){
      setVisible(false);
      return;
    }

    setVisible(true);
    const timer = setTimeout(()=>{
      setVisible(false);
    },3000);

    return () => clearTimeout(timer);
  },[msg]);
  console.log(styles.message)
  return(
    <div>
      {visible &&(
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </div>
  );
}

export default Mensagem;