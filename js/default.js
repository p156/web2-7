window.alert('こんにちは世界！');
console.log('こんにちは世界！');
document.getElementById('choice').textContent = new Date();
var result = window.confirm('準備ok?');
if(result){
  document.getElementById('choice').textContent = 'okが押されました';
}else{
  document.getElementById('choice').textContent = 'キャンセルが押されました';
}
