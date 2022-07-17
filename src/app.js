import React, { useEffect, useState } from 'react'
import './app.css'



function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Fetch Data Here!
    //fetch('http://localhost:3000/build/blog.json')
    fetch('build/old.json')
      .then((response) => response.json())
      //.then((data) => console.log(data))
      .then((data) => {
        setPosts(data)
      })
  }, [])

  return (
    <div className="app">
      <div className="side">

      </div>

      <div className="center">
        <header className="app-header">
          <h1>HaganLife</h1>
        </header>

        <main>
          {posts.map((post) => (
            <article>
              <div className='article-date'>
                <div className='article-day'>{post.pub_day}</div>
                <div className='article-month-year'>{post.pub_month_year}</div>
              </div>
              <div className='post'>
                <header>{post.title}</header>
                <footer>By William Hagan | 1 Minute Read | 0 Comments</footer>
                <div dangerouslySetInnerHTML={{__html: post.text}} />
              </div>
            </article>
          ))}
          {/*
          <article>
            <div className='article-date'>
              <div className='article-day'>12</div>
              <div className='article-month-year'>JUL 2022</div>
            </div>
            <div className='post'>
              <header>macOS Monterey MongoDB Setup</header>
              <footer>By William Hagan | 1 Minute Read | 0 Comments</footer>
              <p>
                <ol>
                  <li>mkdir ~/data/db</li>
                  <li>cd data/db</li>
                  <li>pwd</li>
                  <ol>
                    <li>/Users/nameddrive/data/db</li>
                  </ol>
                  <li>cd ~</li>
                  <li>sudo mongod --dbpath=/Users/nameddrive/data/db</li>
                  <ol><li>starts mongo database</li></ol>
                  <li>start MongoDB Compass application</li>
                  <li>connect</li>
                </ol>
              </p>
            </div>
          </article>
          <article>
            <div className='article-date'>
              <div className='article-day'>03</div>
              <div className='article-month-year'>JUL 2022</div>
            </div>
            <div className='post'>
              <header>THIS IS A POST ABOUT MY CRAZY RANTS</header>
              <footer>By William Hagan | 1 Minute Read | 0 Comments</footer>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat ligula lectus, eget cursus justo tincidunt et. Etiam ullamcorper quis ante et pretium. Duis facilisis nisl ut leo viverra, vitae convallis velit tincidunt. Fusce posuere ac velit a semper. Pellentesque varius sem lectus. Duis euismod fermentum cursus. Proin eget iaculis urna, eget dapibus nibh. Vivamus vitae felis in dolor ornare ultricies vulputate in neque.</p>
              <p>Ut sodales id quam tincidunt iaculis. Nulla nec ante arcu. Pellentesque molestie libero velit, eu tempus sapien egestas eget. Cras at velit sit amet metus posuere mollis. Donec gravida, felis venenatis porta lacinia, neque enim hendrerit sapien, eu scelerisque justo augue eu lectus. Phasellus blandit sit amet dui quis tincidunt. Nullam faucibus ipsum id erat volutpat ullamcorper. Praesent odio mi, facilisis id fringilla ut, gravida elementum velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris a scelerisque sapien. Donec ac orci non leo dapibus mattis. Sed eleifend eget turpis id convallis.</p>
            </div>
          </article>
          <article>
            <div className='article-date'>
              <div className='article-day'>04</div>
              <div className='article-month-year'>JUL 2022</div>
            </div>
            <div className='post'>
              <header>WHAT MAY COME OF THIS COLOR COMBINATION</header>
              <footer>By William Hagan | 1 Minute Read | 0 Comments</footer>
              <p>Mauris cursus porta est. Vestibulum ultricies quam vel eros mollis pharetra. Vivamus lorem tortor, pulvinar a leo nec, consectetur faucibus ante. Maecenas dictum arcu id fermentum facilisis. Integer pellentesque condimentum felis. Cras vel ultrices felis. Aliquam nec tellus non sapien dapibus consequat ac ut ante. Maecenas eu tortor lorem. Nulla enim nibh, fringilla et turpis in, iaculis maximus tellus. Pellentesque suscipit tellus sed arcu accumsan, et feugiat turpis fringilla. Mauris egestas ligula vitae placerat ultrices.</p>
              <p>Nulla facilisi. Nam vestibulum ipsum eget lacus tristique, at viverra massa vehicula. Fusce facilisis condimentum neque, id aliquam ligula porttitor eu. Aenean id metus mauris. Phasellus justo magna, commodo eu pulvinar ac, molestie sit amet nunc. Cras posuere ipsum auctor urna malesuada luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam laoreet consequat elit, fringilla commodo lorem pretium eget. Etiam porttitor, ante in consectetur luctus, velit ipsum dictum lacus, sed tincidunt massa velit a ante. Sed consectetur massa ac dictum suscipit.</p>
            </div>
          </article>
          */}
          <p>Does static content appear?</p>
        </main>
      </div>

      <div className="side">

      </div>
      

    </div>
  );
}

export default App;
