import * as $ from 'jquery';
import Post from '@models/post';
import json from './assets/myJson';
import pic from './assets/maya.jpg';
import './styles/styles.css';

const post = new Post('Webpack Post Title', pic);

console.log('Post to String', post.toString());

$('pre').html(post.toString());

// console.log('JSON', json);
