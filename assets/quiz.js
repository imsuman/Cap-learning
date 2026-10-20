// Reusable quiz: <div class="q" data-answer="2"> with <p>, <button>s, and <p class="why">.
// data-answer is the 1-based index of the correct button. Feedback is immediate.
(function(){
  var qs=[].slice.call(document.querySelectorAll('.q')),done=0,right=0;
  var score=document.getElementById('score');
  qs.forEach(function(q){
    var btns=[].slice.call(q.querySelectorAll('button')),ans=+q.dataset.answer;
    btns.forEach(function(b,i){b.addEventListener('click',function(){
      var ok=i+1===ans;
      btns.forEach(function(x){x.disabled=true});
      b.classList.add(ok?'ok':'bad');
      if(!ok)btns[ans-1].classList.add('ok');
      q.querySelector('.why').classList.add('show');
      done++;if(ok)right++;
      if(score)score.textContent=right+' / '+qs.length+' correct'+(done===qs.length?'. Note the ones you missed and ask your teacher about them.':'');
    })});
  });
})();
