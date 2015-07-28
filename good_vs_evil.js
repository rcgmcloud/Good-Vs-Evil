function goodVsEvil(good, evil){
  var goodArr = good.split(" ");
  var evilArr = evil.split(" ");
  var goodTotal = 0;
  var evilTotal = 0;
  goodTotal += goodArr[0] * 1;
  goodTotal += goodArr[1] * 2;
  goodTotal += goodArr[2] * 3;
  goodTotal += goodArr[3] * 3;
  goodTotal += goodArr[4] * 4;
  goodTotal += goodArr[5] * 10;

  evilTotal += evilArr[0] * 1;
  evilTotal += evilArr[1] * 2;
  evilTotal += evilArr[2] * 2;
  evilTotal += evilArr[3] * 2;
  evilTotal += evilArr[4] * 3;
  evilTotal += evilArr[5] * 5;
  evilTotal += evilArr[6] * 10;

  if (goodTotal === evilTotal){
    return "Battle Result: No victor on this battle field";
  }
  if (goodTotal > evilTotal){
    return "Battle Result: Good triumphs over Evil";
  }
  return "Battle Result: Evil eradicates all trace of Good";
}