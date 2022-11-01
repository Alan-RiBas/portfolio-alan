// import './components/Sobre/style.css';

export const handleSlideDown = () =>{
  const screen = window.innerWidth;
  const iName = document.querySelector('.info-name');
  const iEmail = document.querySelector('.info-email');
  const iLinkedIn = document.querySelector('.info-linkedin');
  const iGitHub = document.querySelector('.info-github');

  if(screen >= 360 && screen <= 549){
    iName.classList.add('slide-off');
    iEmail.classList.add('slide-off');
    iLinkedIn.classList.add('slide-off');
    iGitHub.classList.add('slide-off');
    iName.classList.remove('slide');
    iEmail.classList.remove('slide');
    iLinkedIn.classList.remove('slide');
    iGitHub.classList.remove('slide');

    setTimeout(() => {
      iName.classList.remove('slide-off');
      iName.classList.add('slide');
      iEmail.classList.add('slide-off');
      iLinkedIn.classList.add('slide-off');
      iGitHub.classList.add('slide-off');
  
      setTimeout(() => {
        iName.classList.remove('slide');
        iName.classList.add('slide-off');
        iEmail.classList.remove('slide-off');
        iEmail.classList.add('slide');
  
        setTimeout(() => {
          iEmail.classList.remove('slide');
          iEmail.classList.add('slide-off');
          iLinkedIn.classList.remove('slide-off');
          iLinkedIn.classList.add('slide');
          handleSlideBack();
        }, 6000);
      }, 6000);
    }, 100);
  }else if(screen > 549 && screen <= 820){
    iName.classList.add('slide-off');
    iEmail.classList.add('slide-off');
    iLinkedIn.classList.add('slide-off');
    iGitHub.classList.add('slide-off');
    iName.classList.remove('slide');
    iEmail.classList.remove('slide');
    iLinkedIn.classList.remove('slide');
    iGitHub.classList.remove('slide');
    setTimeout(() => {

      iLinkedIn.classList.remove('slide-tablet');
      iLinkedIn.classList.add('slide-off')
      iGitHub.classList.remove('slide-tablet');
      iGitHub.classList.add('slide-off');

      iName.classList.remove('slide-off');
      iName.classList.add('slide-tablet');
      iEmail.classList.remove('slide-off');
      iEmail.classList.add('slide-tablet');
      setTimeout(() => {
  
        handleSlideBack();
      }, 6000);
    }, 100);
  }
}

const handleSlideBack = () =>{
  const screen = window.innerWidth;
  const iName = document.querySelector('.info-name');
  const iEmail = document.querySelector('.info-email');
  const iLinkedIn = document.querySelector('.info-linkedin');
  const iGitHub = document.querySelector('.info-github');
  if(screen >= 360 && screen <= 549){
    iName.classList.add('slide-off');
    iEmail.classList.add('slide-off');
    iLinkedIn.classList.add('slide-off');
    iGitHub.classList.add('slide-off');
    iName.classList.remove('slide');
    iEmail.classList.remove('slide');
    iLinkedIn.classList.remove('slide');
    iGitHub.classList.remove('slide');



    iGitHub.classList.remove('slide-off');
    iLinkedIn.classList.remove('slide');
    iGitHub.classList.add('slide');
    iLinkedIn.classList.add('slide-off');
    setTimeout(() => {
      handleSlideDown();
    }, 6000);
  }else if(screen > 549 && screen <= 820){
    iName.classList.remove('slide-tablet');
    iName.classList.add('slide-off')
    iEmail.classList.remove('slide-tablet');
    iEmail.classList.add('slide-off');

    iLinkedIn.classList.remove('slide-off');
    iLinkedIn.classList.add('slide-tablet');
    iGitHub.classList.remove('slide-off');
    iGitHub.classList.add('slide-tablet');
    setTimeout(() => {
      handleSlideDown();
    }, 6000);
  }
}