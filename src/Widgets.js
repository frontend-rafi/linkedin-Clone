import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  return (
    <div className='widgets'>
<div className="widgets_header">
  <h2>Linkedin News</h2>
<InfoIcon/>
</div>

{/* <WidgetsOption 
icon={FiberManualRecordIcon}
heading = {"This Is A Breaking News" }
title={"'Top news- 1,553 readers'"}
/> */}

{/* 
{newArticle("Tesla  stocks" , 'Top news- 1,553 readers')}
{newArticle("Amazone Data Crash" , 'Top news- 2,343 readers')}
{newArticle("This Is A Breaking News" , 'Top news- 2,343 readers')}
{newArticle("This Is A Breaking News" , 'Top news- 2,343 readers')}
{newArticle("This Is A Breaking News" , 'Top news- 2,343 readers')}
{newArticle("This Is A Breaking News" , 'Top news- 2,343 readers')} */}
<div className="widgets_article">
  <div className="widgets_article_left">
   { <FiberManualRecordIcon/>}
  </div>
    <div className="widgets_article_right">
      <h4>"This Is A Breaking News" </h4>
<p> 'Top news- 2,343 readers'</p>
    </div>

</div>
<div className="widgets_article">
  <div className="widgets_article_left">
   { <FiberManualRecordIcon/>}
  </div>
    <div className="widgets_article_right">
      <h4>"This Is A Breaking News" </h4>
<p> 'Top news- 2,343 readers'</p>
    </div>

</div>
<div className="widgets_article">
  <div className="widgets_article_left">
   { <FiberManualRecordIcon/>}
  </div>
    <div className="widgets_article_right">
      <h4>"This Is A Breaking News" </h4>
<p> 'Top news- 2,343 readers'</p>
    </div>

</div>
<div className="widgets_article">
  <div className="widgets_article_left">
   { <FiberManualRecordIcon/>}
  </div>
    <div className="widgets_article_right">
      <h4>"This Is A Breaking News" </h4>
<p> 'Top news- 2,343 readers'</p>
    </div>

</div>
<div className="widgets_article">
  <div className="widgets_article_left">
   { <FiberManualRecordIcon/>}
  </div>
    <div className="widgets_article_right">
      <h4>"This Is A Breaking News" </h4>
<p> 'Top news- 2,343 readers'</p>
    </div>

</div>
<div className="widgets_article">
  <div className="widgets_article_left">
   { <FiberManualRecordIcon/>}
  </div>
    <div className="widgets_article_right">
      <h4>"This Is A Breaking News" </h4>
<p> 'Top news- 2,343 readers'</p>
    </div>

</div>
<div className="widgets_article">
  <div className="widgets_article_left">
   { <FiberManualRecordIcon/>}
  </div>
    <div className="widgets_article_right">
      <h4>"This Is A Breaking News" </h4>
<p> 'Top news- 2,343 readers'</p>
    </div>

</div>
    </div>
  )
}

export default Widgets