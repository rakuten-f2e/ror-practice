class TurnoverFormComponent {
  constructor() {
    this.params = {
      codes: '',
      date: ''
    };
  }
  onSearch() {
    const { codes, date } = this.params;
    if (!codes && !date ) return;
    this.onGetByParams({
      $event: {
        params: {
          codes,
          date: date.replace(/-/g, '')
        }
      }
    });
  }
  onClear() {
    this.params = {
      codes: '',
      date: ''
    };
  }
}

export default {
  template: require('./turnoverForm.html'),
  controller: TurnoverFormComponent,
  bindings: {
    dates: '<',
    onGetByParams: '&'
  }
};
