
hidden=true

function clickme() {
  if (hidden) {
    document.getElementById('demo').style.display='block';
    hidden=false;
  } else {
    document.getElementById('demo').style.display='none';
    hidden=true;
  }
}
