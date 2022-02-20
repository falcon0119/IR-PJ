import React from 'react';
import Lesson from './Lesson';

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      },
      {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      },
      {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      },
      {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      },{
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      },
      {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      },{
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      },
      {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      }, {
        
        image: 'https://plaid.co.jp/assets/img/press/media/p140825/plaid-logo.png',
        introduction: '説明',
      },
      
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className='copy-container'>
            <h1>IR museum</h1>
            
          </div>
           
          <div className='lesson-container'>
            <h3>最新</h3>
            {lessonList.map((lessonItem) => {
              return (
                <Lesson
                  name={lessonItem.name}
                  image={lessonItem.image}
                  introduction={lessonItem.introduction}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
