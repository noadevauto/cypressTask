
import { describe } from 'mocha';
import HistoryList from '../pages/HistoryList';
import main from '../pages/MainPage';






const pageTest = (): void => {
  it(`Should load main Page`, () => {
    main.load();
  });
  describe('Test calulation 1+4', function() {
    it('Noa HomeWork ', function() {
      main.calcBtn("Clear").click();
      main.calcBtn("4").click();
      main.calcBtn("Plus").click();
      main.calcBtn("1").click();
      main.calcBtn("Calc").click();
      main.inputOrOutputText().invoke('text').then((calcResult) => {
        // replace the space char
        expect(calcResult.replace(/\u00a0/g, ' ')).equal('= 5')
        })
       
        

  })
  })

  describe('Test calulation 12-6', function() {
    it('Noa HomeWork ', function() {
      main.calcBtn("Clear").click();
      main.calcBtn("1").click();
      main.calcBtn("2").click();
      main.calcBtn("Minus").click();
      main.calcBtn("6").click();
      main.calcBtn("Calc").click();
      main.blabla().invoke('text').then((calcResult) => {
        // replace the space char
        expect(calcResult.replace(/\u00a0/g, ' ')).equal('= 6')
        })
        main.calcBtn("Clear").click();
       
        

  })
  })

  describe('Test calulation (14-2)*2', function() {
    it('Noa HomeWork ', function() {
      main.calcBtn("Clear").click();
      main.calcBtn("ParanL").click();
      main.calcBtn("1").click();
      main.calcBtn("4").click();
      main.calcBtn("Minus").click();
      main.calcBtn("2").click();
      main.calcBtn("ParanR").click();
      main.calcBtn("Mult").click();
      main.calcBtn("2").click();
      main.calcBtn("Calc").click();

      main.inputOrOutputText().invoke('text').then((calcResult) => {
        // replace the space char
        expect(calcResult.replace(/\u00a0/g, ' ')).equal('= 24')
        })
        main.calcBtn("Clear").click();
        

  })
  })
  describe('Test calulation (14-2)*2', function() {
    it('Noa HomeWork ', function() {
      main.calcBtn("Clear").click();
      main.calcBtn("Sin").click();
      main.calcBtn("30").click();
      main.calcBtn("ParanR").click();
      main.calcBtn("2").click();
      main.calcBtn("Calc").click();

      main.inputOrOutputText().invoke('text').then((calcResult) => {
        // replace the space char
        expect(calcResult.replace(/\u00a0/g, ' ')).equal('= 0.5')
        })
        main.calcBtn("Clear").click();
        

  })
  })

  describe('Test correct history of all formulas', function() {
    it('Noa HomeWork ', function() {
      main.historyOpen().click();
      main.historyCalc=new HistoryList();
      main.historyCalc.historyCalcList().should('have.length', 4);
  })
  })
};

//  describe('Test history list after calculation',()=>{
// it ("asdasdasdas"),()=>{}
// history = new HistoryList(main.HistoryListElement("#histframe"));
//  }

export { pageTest };
