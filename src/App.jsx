import { useState, useEffect } from 'react'
import './styles.css'

import getArticles from './utilities/getArticles'
import Button from './components/Button'
import Header from './components/Header'

export default function App() {
  const [numOfArticles, setNumOfArticles] = useState(4)
  const [currentArticles, setCurrentArticles] = useState([])

  useEffect(() => {
    // İstemci tarafında çalışacak kodları buraya alıyoruz
    setCurrentArticles(getArticles(numOfArticles))
  }, [numOfArticles]) // numOfArticles değiştiğinde tekrar çalışacak

  /* Challenge

	Aşağıdaki liste öğeleri DRY (Kendini Tekrar Etme) ilkesine uymuyor. Göreviniz aşağıdakileri yaparak bunu düzeltmektir: 
	
		1. Liste öğeleri (34 ila 58. satırlar) manuel olarak oluşturulmak yerine bir tür yinelemeli yaklaşımla oluşturulmalıdır. 
		
		2. currentArticles dizisindeki her nesne için otomatik olarak bir liste öğesi olmalıdır (satır 8).
		   
		3. Eğer numOfArticles (satır 9) aynı sayıda (4) kalırsa, app bu görevleri tamamladıktan sonra aynı görünmelidir. Ancak, numOfArticles daha yüksek veya daha düşük bir sayı olarak değiştirilirse, buna karşılık gelen sayıda liste öğesi oluşturulmalıdır. Bunu test edin
*/

  return (
    <div className='wrapper'>
      <Header />
      <main>
        <ul>
          {currentArticles.map((article,index)=> (
            <li key={index}>
              <a href={article.link} target="blank" rel="noopener noreferrer">
              {article.title}
              </a>
              </li>
          ))}
          
          </ul>
          <Button
          numOfArticles={numOfArticles}
          setCurrentArticles={setCurrentArticles}
          />
          </main>
          </div>
        )
}
