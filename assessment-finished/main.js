const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '外は50度だったので :insertx: は歩いて行った。 :inserty: に着いたとき、しばらく硬直ていたところ、 :insertz:  ジスは全てを知ってしまったが、特に驚きやしなかった — :insertx: 重さ3000kgで、めちゃくちゃ寒い日だった。';
const insertX = ['ジェニ', 'ロゼ', 'リサ'];
const insertY = ['ユニバ', 'ディズニーランド', '国会議事堂'];
const insertZ = ['地面が崩れ始めていた', '混沌としていた', '雪が溶けていた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ジス', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
