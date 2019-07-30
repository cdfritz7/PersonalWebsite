import leaf from './imgs/leaf_background.jpg'
import star from './imgs/star_background.jpg'

class MyProjectList {
  constructor(){
    this.list = [];

    this.list.push(
        {
          name:'ASL Hand Sign Identification',
          desc:'This was a research project I presented at an undergraduate \
                research symposium at UT austin. I used a convolution neural network \
                to identify American Sign Language letter signs. The network was \
                trained on signs from 6 users, and was able to achieve above 99% \
                accuracy when tested on the same users.',
          github:'https://github.com',
          imgs:[require('./imgs/ASL_CNN/structure.jpg'),
                require('./imgs/ASL_CNN/accuracy.jpg')],
          tools: 'Python, Keras, Numpy, Pandas'
        }
    );

    this.list.push(
        {
          name:'Motherboard Repair Prediction',
          desc:'I worked on this project at Dell. Using a NLP applied to tech\
                support call logs and historic repair data, I was able to \
                identify what motherboard parts needed to be replaced. I\'m currently\
                working with a senior data scientists to deploy the model in \
                Dell repair centers.',
          github:'None',
          imgs:[require('./imgs/MB_repair/latitude.jpeg'),
                require('./imgs/MB_repair/lstm_cell.jpeg')],
          tools: 'Python, sklearn, PySpark, Pandas, SQL, Numpy'
        }
    );

    this.list.push(
        {
          name:'This Website',
          desc:'I built this website to practice react and show off some of the\
                projects I\'ve worked on. I built this as a single page app \
                using ReactJS and HTML/CSS. I used react-router to get standard \
                webapp functionality out of this SPA. I also used react-bootstrap \
                for styling.',
          github:'https://github.com',
          imgs:[require('./imgs/this_website/code.png'),
                require('./imgs/this_website/website.png')],
          tools: 'Javascript, HTML/CSS, ReactJS'
        }
    );

    this.list.push(
        {
          name:'Treexas - Interactive Database',
          desc:'This was a semester long project a team and I built using Django \
                with a MySQL backend. The basic idea is that it\'s an interactive \
                database that allows users to search for texas plants, state parks \
                and ecoregions. We built a lot of functionality into our site \
                including animations, dynamic reactions, an interactive map, \
                pagination, etc',
          github:'https://github.com',
          imgs:[require('./imgs/treexas/frontpage.png'),
                require('./imgs/treexas/map.png'),
                require('./imgs/treexas/stateparks.png')],
          tools: 'Python, Javascript, HTML/CSS, Django, SQL'
        }
    );

    this.list.push(
        {
          name:'ASCII Art Creator',
          desc:'This was a smaller project I built for fun. It takes a video or \
                 picture as input, then converts it to a text file of ascii characters. \
                 Thus automatically creating some ascii art. \
                 The user can even change the pixelation of the output.',
          github:'https://github.com',
          imgs:[require('./imgs/ascii_art/danny_out1.jpg'),
                require('./imgs/ascii_art/danny_out2.jpg'),
                require('./imgs/ascii_art/stefan_out1.jpg')],
          tools: 'Python, Javascript, HTML/CSS, Django, SQL'
        }
    );

    this.list.push(
        {
          name:'Deep Autoencoders for Sonar Feature Extraction',
          desc:'This was a project I built for my work at the Applied Research Lab. \
                Basically, we used deep autoencoders to create low dimensional \
                representations of sonar plots for use in later clustering.',
          github:'None',
          imgs:[require('./imgs/sonar_autoencoders/sonar_plots.png'),
                require('./imgs/sonar_autoencoders/autoencoder.jpeg')],
          tools: 'Python, Keras, Numpy'
        }
    );

    this.list.push(
        {
          name:'Clustering for Identification of Large Underwater Objects',
          desc:'Another project I worked on for the Applied Research Laboratories!\
                I used unsupervised machine learning techniques (clustering) and \
                object recognition/tracking techniques to create a system \
                for classifying and tracking large underwater objects such as \
                schools of fish and underwater mountains.',
          github:'None',
          imgs:[require('./imgs/sonar_clustering/sonar.jpeg'),
                require('./imgs/sonar_clustering/dbscan.gif')],
          tools: 'Python, Sklearn, Numpy'
        }
    );

    this.list.push(
        {
          name:'Fractal Generator',
          desc:'This was a hobby project I worked on to create christmas cards \
                for friends and family. The user can easily create different types \
                of fractals using python and matplotlib.',
          github:'https://github.com',
          imgs:[require('./imgs/fractal_generator/treefractal5.jpg'),
                require('./imgs/fractal_generator/fractal7.jpg'),
                require('./imgs/fractal_generator/fractal2.jpg')],
          tools: 'Python, Matplotlib'
        }
    );

    this.list.push(
        {
          name:'Handheld Videogame',
          desc:'This was a school project for an Embedded Systems class. \
                My partner and I built a handheld two player game from scratch. \
                The two players would face off in a space duel, and could select \
                from multiple levels. If I remember correctly, we got 6th place \
                out of 63 teams',
          github:'https://github.com',
          imgs:[require('./imgs/c_videogame/videogame1.png'),
                require('./imgs/c_videogame/videogame2.png')],
          tools: 'C, lots of hardware'
        }
    );

    this.list.push(
        {
          name:'Pixel Sorter',
          desc:'For this project, I built a python script that allows users to make \
                digital art by sorting pixels within an image. The user can specify \
                square shapes by pixel value and percentages, and can choose from \
                multiple pixel sorting styles.',
          github:'https://github.com',
          imgs:[require('./imgs/pixelsorter/jellyfishout.jpg')],
          tools: 'Python, CV2'
        }
    );

    this.list.push(
        {
          name:'Chat Client',
          desc:'This was the final project for another one of my classes. We built \
                A fully functional chat client that allowed users to create chatrooms \
                with multiple other users. We used a singleton design pattern and \
                lots of socket programming for this one. Unfortunately I can\'t make \
                the github for this one public because of cheating concerns.',
          github:'None',
          imgs:[require('./imgs/chat_client/client.png')],
          tools: 'Java'
        }
    );



  }
}

export default MyProjectList;
