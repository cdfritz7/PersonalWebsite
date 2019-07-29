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
          desc:'example',
          github:'https://github.com',
          imgs:[require('./imgs/this_website/code.png'),
                require('./imgs/this_website/website.png')],
          tools: 'Javascript, HTML/CSS, ReactJS'
        }
    );

    this.list.push(
        {
          name:'Treexas - Interactive Database',
          desc:'example',
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
          desc:'example',
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
          desc:'example',
          github:'None',
          imgs:[require('./imgs/sonar_autoencoders/sonar_plots.png'),
                require('./imgs/sonar_autoencoders/autoencoder.jpeg')],
          tools: 'Python, Keras, Numpy'
        }
    );

    this.list.push(
        {
          name:'Clustering for Identification of Large Underwater Objects',
          desc:'example',
          github:'None',
          imgs:[require('./imgs/sonar_clustering/sonar.jpeg'),
                require('./imgs/sonar_clustering/dbscan.gif')],
          tools: 'Python, Sklearn, Numpy'
        }
    );

    this.list.push(
        {
          name:'Fractal Generator',
          desc:'example',
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
          desc:'example',
          github:'https://github.com',
          imgs:[require('./imgs/c_videogame/videogame1.png'),
                require('./imgs/c_videogame/videogame2.png')],
          tools: 'Python, CV2'
        }
    );

    this.list.push(
        {
          name:'Pixel Sorter',
          desc:'example',
          github:'https://github.com',
          imgs:[require('./imgs/pixelsorter/jellyfishout.jpg')],
          tools: 'Python, CV2'
        }
    );

    this.list.push(
        {
          name:'Chat Client',
          desc:'example',
          github:'None',
          imgs:[require('./imgs/chat_client/client.png')],
          tools: 'Python, CV2'
        }
    );



  }
}

export default MyProjectList;
