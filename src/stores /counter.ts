import { observable } from 'mobx';

interface count {
  number: number;
  increase(): void;
  decrease(): void;
}

const counter = observable<count>({
  number: 1,
  increase() {
    this.number++;
  },
  decrease() {
    this.number--;
  },
});

export { counter };
