import * as React from 'react';
import './App.css';
import { YearButton } from '../components/YearButton/YearButton';
import RangeButton from '../components/RangeButton/RangeButton';
import ArrowButton from '../components/ArrowButton/ArrowButton';
import ImgButton from '../components/ImgButton/ImgButton';
import { TextField } from '../components/TextField/TextField';

export interface AppProps {
  selectedYear: string,
  updateYear: (x: string) => void,
  startYearLimit: number,
  endYearLimit: number
}

export interface AppState {
  years: number[][];
  isVisible: boolean;
  currYear: string;
}

export class App extends React.Component<AppProps, AppState> {

  generateYearArray = (startYear: number): number[][] => {
    let matrix: number[][] = [];
    for(let i = 0; i < 4; i++){
      let row: number[] = [];
      for(let j = 0; j < 4; j++){
        let ind = startYear + i * 4 + j;
        row.push(ind);
      }
      matrix.push(row);
    }
    return matrix;
  }

  state = {
    // years: [
    //   [2000, 2001, 2002, 2003],
    //   [2004, 2005, 2006, 2007],
    //   [2008, 2009, 2010, 2011],
    //   [2012, 2013, 2014, 2015]
    // ],
    years: this.generateYearArray(this.props.startYearLimit),
    isVisible: false,
    currYear: this.props.selectedYear
  }

  upRangeChange = () => {
    let arr = this.state.years;
    arr.forEach((subArr, i) => {
      subArr.forEach((ele, j) => {
        arr[i][j] = ele - 16;
      })
    });

    this.setState({years: arr});
  }

  downRangeChange = () => {
    let arr = this.state.years;
    arr.forEach((subArr, i) => {
      subArr.forEach((ele, j) => {
        arr[i][j] = ele + 16;
      })
    });

    this.setState({years: arr});
  }

  clickYear = (y:string) => {
    console.log(y);

    this.setState({currYear: y});

    this.props.updateYear(y);
  }

  showHideYearPicker = () => {
    this.setState({isVisible: !this.state.isVisible});
  }

  render(): React.ReactNode {
      return (
        <div className='YearPicker'>
          <div className='MainInput'>
            <TextField disabled={true} value={this.state.currYear} />
            <ImgButton StateIsVisible={this.state.isVisible} ToggleStateIsVisibleHandler={this.showHideYearPicker} />
          </div>
          {this.state.isVisible && 
          <div className='YearGrid'> 
            <div className='YearRow'>
              <RangeButton 
              first={this.state.years[0][0]} 
              last={this.state.years[3][3] < this.props.endYearLimit ? this.state.years[3][3] : this.props.endYearLimit}/>
              <ArrowButton 
              arrow={String.fromCharCode(8593)} 
              ClickHandler={this.upRangeChange} 
              startYear={this.props.startYearLimit} 
              endYear={this.props.endYearLimit}
              firstYear={this.state.years[0][0]}
              lastYear={this.state.years[3][3]}
              isUpArrow={true} />

              <ArrowButton 
              arrow={String.fromCharCode(8595)} 
              ClickHandler={this.downRangeChange} 
              startYear={this.props.startYearLimit} 
              endYear={this.props.endYearLimit}
              firstYear={this.state.years[0][0]}
              lastYear={this.state.years[3][3]}
              isUpArrow={false} />
            </div>
            {this.state.years.map((subArr, index) =>  (
              <div key={index} className='YearRow'>
                {subArr.map((eachYear, subIndex) => (
                  <YearButton 
                    key={[eachYear, index, subIndex].join()} 
                    name={eachYear.toString()} 
                    ClickHandler={this.clickYear} 
                    startYear={this.props.startYearLimit} 
                    endYear={this.props.endYearLimit} />
                ))}
              </div>
            ))}
          </div>}
        </div>
      );
  }
  
}

export default App;
