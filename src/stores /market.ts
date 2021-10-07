import { observable } from 'mobx';

interface marketProps {
  put: (name: string, price: number) => void;
  take: (name: string) => void;
  total: () => void;
  selectedItems: marketItem[];
}

interface marketItem {
  name: string;
  price: number;
  count: number;
}

const market = observable<marketProps>({
  selectedItems: [],
  put(name, price) {
    const exists = this.selectedItems.find(
      (item: marketItem) => item.name === name,
    );
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        count: 1,
      });
      return;
    }
    exists.count++;
  },
  take(name) {
    const itemToTake = this.selectedItems.find(
      (item: marketItem) => item.name === name,
    );
    if (itemToTake?.count) {
      itemToTake.count -= 1;
    }
    if (itemToTake?.count === 0) {
      // 갯수가 0 이면
      const idx = this.selectedItems.findIndex(
        (item: marketItem) => item.name === name,
      );
      this.selectedItems.splice(idx, 1);
    }
  },
  get total() {
    console.log('총합 계산...');
    return this.selectedItems.reduce(
      (previous: number, current: marketItem) => {
        return previous + current.price * current.count;
      },
      0,
    );
  },
});

export { market };
