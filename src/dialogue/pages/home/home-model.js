import Rx from 'rx';
// merging our clicks from our intent
// (a,b) -> num
const homeModel = actions =>
  Rx.Observable.merge(
    actions.inc$,
    actions.dec$
  ).startWith(0).scan((x, y) =>  x + y).shareReplay(1);

export default homeModel;
