import basePage from './BasePage';
import HistoryList from './HistoryList';


class MainPage extends basePage {
  baseURL: string;
 

  constructor() {
    super('https://web2.0calc.com');
  }
}

const mainPage = new MainPage();
const history = new HistoryList();
export default mainPage;



