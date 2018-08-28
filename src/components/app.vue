<template>


    <div class="d-flex flex-column" style="height:100%;padding:1px;padding-left:0px;width:100%">
      <div class="loaderanimate" style="cursor:none;display: flex;
  justify-content: center;
  align-items: center;color:#e4e4e4">
        <div id="betas" class="animated infinite rubberBand" style="pointer-events:none;margin-bottom:100px;font-size:200px;cursor:none">AegCanvas<span class="beta">beta</span></div>
      </div>
      <div>
        <input style="display:none" type="file" id="i_file" value=""> 
         <div class="navigasi" style="margin-bottom:3px;">
      <div class="logo">Aeg<span style="font-size:20px;">Canvas<span style="margin-left:3px;position:absolute;font-size:10px;">beta</span></span></div>
      <div class="nv">
        <ul class="nv-ul">
          <li id="navya" class="file"><span style="margin-right:8px"><svg width="10" aria-hidden="true" data-prefix="far" data-icon="file" class="svg-inline--fa fa-file fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z"></path></svg></span>File</li>
          <li id="navya" class="edit"><span style="margin-right:8px"><svg width="13" aria-hidden="true" data-prefix="far" data-icon="edit" class="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg></span>Edit</li>
          <li id="navya" v-on:click="urlico" class="subtitle"><span style="margin-right:8px;"><svg width="17" aria-hidden="true" data-prefix="fab" data-icon="sass" class="svg-inline--fa fa-sass fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M551.1 291.9c-22.4.1-41.8 5.5-58 13.5-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2c-.1-1.1-1.4-6.6-14.3-6.7-12.9-.1-24 2.5-25.3 5.9-1.3 3.4-3.8 11.1-5.3 19.1-2.3 11.7-25.8 53.5-39.1 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2c-.1-1.1-1.4-6.6-14.3-6.7-12.9-.1-24 2.5-25.3 5.9-1.3 3.4-2.7 11.4-5.3 19.1-2.6 7.7-33.9 77.3-42.1 95.4-4.2 9.2-7.8 16.6-10.4 21.6s-.2.3-.4.9c-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2-.8 0-1.4 2-1.4 2s10.1-42.4-19.4-42.4c-18.4 0-44 20.2-56.6 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.8-38.2-101.9-65.2-99.1-116.5 1-18.7 7.5-67.8 127.1-127.4 98-48.8 176.4-35.4 189.9-5.6 19.4 42.5-41.9 121.6-143.7 133-38.8 4.3-59.2-10.7-64.3-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.8 28.9 18.7 6.1 64.2 9.5 119.2-11.8C367 196.5 415.1 130.2 401 74.7 386.6 18.3 293.1-.2 204.6 31.2 151.9 49.9 94.9 79.3 53.9 117.6 5.2 163.2-2.6 202.9.6 219.5c11.4 58.9 92.6 97.3 125.1 125.7-1.6.9-3.1 1.7-4.5 2.5-16.3 8.1-78.2 40.5-93.7 74.7-17.5 38.8 2.9 66.6 16.3 70.4 41.8 11.6 84.6-9.3 107.6-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.3-4.9 16.4-9.4 23.5-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.5 5 15.4 5 13.8 0 20-11.4 26.9-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.4 0 18.8-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.6-46 16.2-31.8 31.7-71.5 31.7-71.5s1.4 9.7 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2s0 .1.1.2c-3 4-6.4 8.3-9.9 12.5-12.8 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.7 2.5 11.5-.8 19.6-3.6 23.5-5.4 6.2-2.2 13.4-5.7 20.2-10.6 12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5 19.8-28.9 35.1-60.6 35.1-60.6s1.4 9.7 6.2 25.8c2.4 8.1 7.1 17 11.4 25.7-18.6 15.1-30.1 32.6-34.1 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5 6.5-2.2 14.3-5.7 21.6-11.1 12.5-9.2 24.6-22.1 23.8-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.1-10.2 62.1-7.2 55.7 6.5 66.6 41.3 64.5 55.8-2.1 14.6-13.8 22.6-17.7 25-3.9 2.4-5.1 3.3-4.8 5.1.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.2-11.8 30.3-38.7 1.6-34-31.1-71.4-89-71.1zM121.8 436.6c-18.4 20.1-44.2 27.7-55.3 21.3C54.6 451 59.3 421.4 82 400c13.8-13 31.6-25 43.4-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.3 30.4.3 57.2-19.1 78.3zm134.4-91.4c-6.4 15.7-19.9 55.7-28.1 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.1-11.3 21.2-14.9 23.8-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.9-13.9 0 .5.1 1 .1 1.6-.1 17.9-17.3 30-25.1 34.8zm85.6-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.6-15.3 19-24.5 1.2 3.8 1.9 7.4 1.9 10.8-.1 22.5-16.2 30.9-25.9 34.4z"></path></svg></span>Subtitle</li>
          <li id="navya" v-on:click="vidico" class="video"><span style="margin-right:8px;"><svg width="10" aria-hidden="true" data-prefix="far" data-icon="file-video" class="svg-inline--fa fa-file-video fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.941 97.941l-83.882-83.882A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48V131.882a48 48 0 0 0-14.059-33.941zM332.118 128H256V51.882L332.118 128zM48 464V48h160v104c0 13.255 10.745 24 24 24h104v288H48zm228.687-211.303L224 305.374V268c0-11.046-8.954-20-20-20H100c-11.046 0-20 8.954-20 20v104c0 11.046 8.954 20 20 20h104c11.046 0 20-8.954 20-20v-37.374l52.687 52.674C286.704 397.318 304 390.28 304 375.986V264.011c0-14.311-17.309-21.319-27.313-11.314z"></path></svg></span>Video</li>



           <li v-on:click="exportass" id="navya" class="export"><span style="margin-right:8px"><svg width="12" aria-hidden="true" data-prefix="fas" data-icon="upload" class="svg-inline--fa fa-upload fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg></span>Export</li>

          <li id="navya" class="help"><span style="margin-right:8px"><svg width="14" aria-hidden="true" data-prefix="far" data-icon="question-circle" class="svg-inline--fa fa-question-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path></svg></span>Help</li>
          
          
        </ul>
       
      </div>
       <div id="keteranganpanel1" style="width:100%;text-align:right;font-size:14px;margin-top:7px;display:none;">Panel untuk memilih berkas file .ass atau video dalam komputer untuk diproses</div>
        <div id="keteranganpanel2" style="width:100%;text-align:right;font-size:14px;margin-top:7px;display:none;">Fitur-fitur dalam web aplikasi ini (soon!)</div>
          <div id="keteranganpanel3" style="width:100%;text-align:right;font-size:14px;margin-top:7px;display:none;">Load subtitle dari URL.Object</div>
           <div id="keteranganpanel4" style="width:100%;text-align:right;font-size:14px;margin-top:7px;display:none;">Load video dari URL.Object</div>
            <div id="keteranganpanel5" style="width:100%;text-align:right;font-size:14px;margin-top:7px;display:none;">?????????????????????????</div>
            <div id="keteranganpanel6" style="width:100%;text-align:right;font-size:14px;margin-top:7px;display:none;">Ekspor hasil ubah menjadi .ass</div>
             <div id="urlobj" style="width:100%;text-align:right;font-size:14px;margin-top:7px;display:none;">
               <input type="text" style="background-color: #20262e;
    width: auto;
    border: 0px;
    border-bottom: solid 1px #888888;color: rgb(214, 214, 214);
    text-overflow: ellipsis;
    padding-left: 10px;
    outline: none;
    width: 300px;" v-model="assfile" v-on:keyup.enter="urlController">
             </div>

               <div id="vidobj" style="width:100%;text-align:right;font-size:14px;margin-top:7px;display:none;">
               <input type="text" style="background-color: #20262e;
    width: auto;
    border: 0px;
    border-bottom: solid 1px #888888;color: rgb(214, 214, 214);
    text-overflow: ellipsis;
    padding-left: 10px;
    outline: none;
    width: 300px;" v-model="vid" v-on:keyup.enter="videoController">
             </div>
    </div>
    
    
    
      </div>
      <div style="display:flex;height:100%">
      <div style="width:100%">
        <div id="debug1" style="height:100%;width:100%">
          <video style="border-radius:4px;height:100%;width:100%" id="video1" height="auto" controls>
           <source v-bind:src="vid" type="video/mp4">
         </video>
        </div>
      </div>
      <div style="width:100%">
        <div style="padding: 0px;padding-bottom:0px;margin-left: 1px;width: 100%;height:100%">
        <textarea class="textarea" v-model="line[l_id].line" v-on:keyup.enter="enter"></textarea>
      </div>

      </div>
      </div>
      
      <div class="d-flex align-items-stretch" style="padding:0px;height:100%">
        <div style="width:100%">
          <table style="background-color:#20262e;font-size:12px;width:100%;color:#fbfbfb;font-weight:100;">
              <tr>
                <th style="text-align:center;">#</th>
                <th style="text-align:center;">Start</th>
                <th style="text-align:center;">End</th>
                <th style="text-align:center;">Style</th>
                <th style="text-align:center;">Actor</th>
                <th style="text-align:center;">Effect</th>
                <th style="display:none;text-align:center;background-color:rgb(136, 136, 136)">Text</th>
              </tr>
            </table>


                 <div id="tblpg1" style="max-height:95%;overflow-y:hidden">
             <table style="background-color:#20262e;font-size:12px;width:100%;color:#fbfbfb;font-weight:100;">
              <tr v-for="x,i in line">
                <th style=";text-align:center;width:200px;width:25px;"><input class="aegisubline" style="width:100%" type="text" v-model="x.index" disabled></th>
                <th style="text-align:center;width:200px;width:150px;"><input class="aegisubline" style="width:100%" type="text" v-model="x.start" disabled></th>
                <th style=";text-align:center;width:200px;width:150px;"><input class="aegisubline" style="width:100%" type="text" v-model="x.end" disabled></th>
                <th style=";text-align:center;width:200px;width:150px;"><input class="aegisubline" style="width:100%" type="text" v-model="x.style" disabled></th>
                <th style="text-align:center;width:200px;width:159px;"><input class="aegisubline" style="width:100%" type="text" v-model="x.actor" disabled></th>
                <th style="text-align:center;width:200px;width:150px;"><input class="aegisubline" style="width:100%" type="text" v-model="x.effect" disabled></th>
                <th style="display:none;text-align:left;"><input class="" style="padding-left:4px;width:100%" type="text" v-on:keyup.tab="tab" v-on:input="input_bawah(i)" v-on:keyup.enter="enter2" v-on:dblclick="dblclick_bawah(i)" v-model="x.line" v-on:click="click(i)"></th>
              </tr>
      
            </table>
            </div>



        </div>
        <div style="background-color:#1c2128;width:100%;padding:0px;">
            <table style="background-color:#20262e;font-size:12px;width:100%;color:#fbfbfb;font-weight:100;">
              <tr>
                <th style="display:none;text-align:center;width:200px;width:25px;">#</th>
                <th style="display:none;text-align:center;width:200px;width:150px">Start</th>
                <th style="display:none;text-align:center;width:200px;width:150px">End</th>
                <th style="display:none;text-align:center;width:200px;width:150px">Style</th>
                <th style="display:none;text-align:center;width:200px;width:159px">Actor</th>
                <th style="display:none;text-align:center;width:200px;width:150px">Effect</th>
                <th style="text-align:center;background-color:rgb(136, 136, 136)">Text</th>
              </tr>
            </table>
              <div id="tabelpg2" style="max-height:95%;overflow-y:scroll">
             <table style="background-color:#20262e;font-size:12px;width:100%;color:#fbfbfb;font-weight:100;">
              <tr v-for="x,i in line">
                <th style="display:none;text-align:center;width:200px;width:25px;"><input class="aegisubline" style="width:100%" type="text" v-model="x.index" disabled></th>
                <th style="display:none;text-align:center;width:200px;width:150px;"><input class="aegisubline" style="width:100%" type="text" v-model="x.start" disabled></th>
                <th style="display:none;text-align:center;width:200px;width:150px;"><input class="aegisubline" style="width:100%" type="text" v-model="x.end" disabled></th>
                <th style="display:none;text-align:center;width:200px;width:150px;"><input class="aegisubline" style="width:100%" type="text" v-model="x.style" disabled></th>
                <th style="display:none;text-align:center;width:200px;width:159px;"><input class="aegisubline" style="width:100%" type="text" v-model="x.actor" disabled></th>
                <th style="display:none;text-align:center;width:200px;width:150px;"><input class="aegisubline" style="width:100%" type="text" v-model="x.effect" disabled></th>
                <th style="text-align:left;"><input class="playground" style="padding-left:4px;width:100%" type="text" v-on:keyup.tab="tab" v-on:input="input_bawah(i)" v-on:keyup.enter="enter2" v-on:dblclick="dblclick_bawah(i)" v-model="x.line" v-on:click="click(i)"></th>
              </tr>
      
            </table>
            </div>

        </div>
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  data () {
    return {
      panel:false,
      sementara:'',
      ass:null,
      assfile:'https://raw.githubusercontent.com/suakaanimeindonesia/suakaanimeindonesia.github.io/master/example/violetpv4.ass',
      vid:'https://github.com/suakaanimeindonesia/suakaanimeindonesia.github.io/raw/master/example/%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8E%E3%83%B4%E3%82%A1%E3%82%A4%E3%82%AA%E3%83%AC%E3%83%83%E3%83%88%E3%83%BB%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%BC%E3%82%AC%E3%83%BC%E3%83%87%E3%83%B3%E3%80%8FPV%E7%AC%AC4%E5%BC%BE.mp4',
      l: 'Welcome to Your Vue.js App',
      placeholder:`[Script Info]
; Script generated by Aegisub master r8903+1 g1042226, line0
; http://www.aegisub.org/
Title: Default Aegisub file
ScriptType: v4.00+
WrapStyle: 0
ScaledBorderAndShadow: yes
YCbCr Matrix: TV.601
PlayResX: 1280
PlayResY: 720

[Aegisub Project Garbage]
Last Style Storage: #01
Audio File: ../../gay/violetpv4.mp4
Video File: ../../gay/violetpv4.mp4
Video AR Mode: 4
Video AR Value: 1.777778
Video Zoom Percent: 0.625000
Scroll Position: 37
Active Line: 38
Video Position: 828

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,LTFinnegan Medium,48,&H00FFFFFF,&H000000FF,&H00000000,&HB8000000,0,0,0,0,100,100,0,0,1,2.7,1.8,2,100,100,42,0
Style: Default - Copy,Angelina,80,&H00FFFFFF,&H000000FF,&H00000000,&HB8000000,0,0,0,0,100,100,0,0,1,2.7,1.8,2,100,100,42,0

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
Dialogue: 0,0:00:00.00,0:00:01.10,Default,,0,0,0,,Aku ingin tahu,
Dialogue: 0,0:00:02.10,0:00:05.73,Default,,0,0,0,,apa arti dari "aku mencintaimu."
Dialogue: 0,0:00:08.78,0:00:12.15,Default,,0,0,0,,{\i1}Seorang gadis yang hanya\N mematuhi perintah dari Gilbert,
Dialogue: 0,0:00:12.46,0:00:14.95,Default,,0,0,0,,{\i1}untuk pertama kalinya\N berkembang melalui kesadarannya sendiri,
Dialogue: 0,0:00:14.95,0:00:17.66,Default,,0,0,0,,{\i1}dan dia ingin tahu arti dari "aku mencintaimu."
Dialogue: 0,0:00:17.66,0:00:19.04,Default,,0,0,0,,"Violet."
Dialogue: 0,0:00:19.74,0:00:21.12,Default,,0,0,0,,Kalau kamu tumbuh,
Dialogue: 0,0:00:21.12,0:00:24.58,Default,,0,0,0,,aku yakin kamu akan tumbuh menjadi \Ngadis yang pantas mendapatkan nama itu.
Dialogue: 0,0:00:26.88,0:00:29.75,Default,,0,0,0,,Warnanya sama seperti mata {\i1}Mayor.{\i0}
Dialogue: 0,0:00:30.62,0:00:32.34,Default,,0,0,0,,Saat melihatnya,
Dialogue: 0,0:00:33.08,0:00:36.64,Default,,0,0,0,,perasaan apa ini ...?
Dialogue: 0,0:00:43.31,0:00:44.10,Default,,0,0,0,,Bukalah.
Dialogue: 0,0:00:47.35,0:00:49.98,Default,,0,0,0,,Ini liontin yang {\i1}Mayor{\i0} berikan kepadaku.
Dialogue: 0,0:00:49.98,0:00:52.15,Default,,0,0,0,,Robot yang istimewa itu,
Dialogue: 0,0:00:52.15,0:00:54.45,Default,,0,0,0,,adalah robot yang mampu \Nmenuangkan perasaan orang-orang ...
Dialogue: 0,0:00:55.07,0:00:58.45,Default,,0,0,0,,... melalui kata-kata dari\N lubuk hati yang paling terdalam.
Dialogue: 0,0:00:59.42,0:01:02.12,Default,,0,0,0,,Kata-kata itu seperti dua sisi mata koin.
Dialogue: 0,0:01:02.12,0:01:04.37,Default,,0,0,0,,Kata yang terucap tidak begitu \Nmudahnya menjelaskan semuanya.
Dialogue: 0,0:01:12.64,0:01:16.09,Default,,0,0,0,,Menyampaikan isi hati itu tidak mudah, ya?
Dialogue: 0,0:01:16.09,0:01:20.10,Default,,0,0,0,,Padahal, aku hanya ingin bilang terima kasih ...!
Dialogue: 0,0:01:22.10,0:01:25.27,Default,,0,0,0,,Aku ingin menghentikan tangisan di matamu.
Dialogue: 0,0:01:25.27,0:01:30.10,Default,,0,0,0,,Apa tidak ada sesuatu yang Anda\N sembunyikan di dalam hati Anda?
Dialogue: 0,0:01:31.36,0:01:33.99,Default,,0,0,0,,Tidak pernahkah kau teringat orang tersebut?
Dialogue: 0,0:01:34.66,0:01:37.74,Default,,0,0,0,,Setiap waktu selalu teringat.
Dialogue: 0,0:01:37.74,0:01:39.49,Default,,0,0,0,,Mayor Gilbert!
Dialogue: 0,0:01:39.88,0:01:43.20,Default,,0,0,0,,{\i1}Yang kukira awalnya aku \Ntidak mengerti tentang Violet,
Dialogue: 0,0:01:43.20,0:01:44.33,Default,,0,0,0,,{\i1}perlahan-lahan aku mulai mengerti.
Dialogue: 0,0:01:44.98,0:01:51.21,Default,,0,0,0,,{\i1}Violet yang hanya mengerti akan kemiliteran \Ndiberikan cinta oleh Mayor yang dia bicarakan.
Dialogue: 0,0:01:51.75,0:01:53.18,Default,,0,0,0,,{\i1}Lalu,
Dialogue: 0,0:01:53.18,0:01:56.26,Default,,0,0,0,,{\i1}dia berusaha keras mencari arti dari sesuatu.
Dialogue: 0,0:01:57.42,0:01:59.30,Default,,0,0,0,,Kalau itu yang pelanggan inginkan,
Dialogue: 0,0:01:59.30,0:02:01.26,Default,,0,0,0,,saya akan pergi ke manapun itu.
Dialogue: 0,0:02:02.56,0:02:04.52,Default,,0,0,0,,Robot otomatis,
Dialogue: 0,0:02:06.23,0:02:09.48,Default,,0,0,0,,Violet Evergarden.
Dialogue: 0,0:00:24.58,0:00:26.46,Default,,0,0,0,,{\an5\bord0\shad0\blur1\pos(640,360)\p1\fscx983\fscy136\c&H000000&}m 0 0 l 100 0 100 100 0 100
Dialogue: 0,0:00:40.26,0:00:42.64,Default,,0,0,0,,{\an5\bord0\shad0\blur1\pos(640,360)\p1\fscx983\fscy136\c&H000000&}m 0 0 l 100 0 100 100 0 100
Dialogue: 0,0:01:11.55,0:01:14.13,Default,,0,0,0,,{\an5\bord0\shad0\blur1\pos(640,360)\p1\fscx983\fscy136\c&H000000&}m 0 0 l 100 0 100 100 0 100
Dialogue: 0,0:01:20.10,0:01:22.10,Default,,0,0,0,,{\an5\bord0\shad0\blur1\pos(640,360)\p1\fscx983\fscy136\c&H000000&}m 0 0 l 100 0 100 100 0 100
Dialogue: 0,0:01:28.81,0:01:31.69,Default,,0,0,0,,{\an5\bord0\shad0\blur1\pos(640,360)\p1\fscx983\fscy136\c&H000000&}m 0 0 l 100 0 100 100 0 100
Dialogue: 0,0:00:24.58,0:00:26.46,Default - Copy,,0,0,0,Sien,{\an5\blur0.7\c&HE3E3E3&\bord0}Gadis itu masih belum tahu
Dialogue: 0,0:00:40.26,0:00:42.64,Default - Copy,,0,0,0,Sien,{\an5\blur0.7\c&HE3E3E3&\bord0}arti dari "aku mencintaimu."
Dialogue: 0,0:01:11.55,0:01:14.13,Default - Copy,,0,0,0,Sien,{\an5\blur0.7\c&HE3E3E3&\bord0}Semakin banyak surat yang dia tulis,
Dialogue: 0,0:01:20.10,0:01:22.10,Default - Copy,,0,0,0,Sien,{\an5\blur0.7\c&HE3E3E3&\bord0}semakin banyak perasaan yang dia tahu.
Dialogue: 0,0:01:28.81,0:01:31.69,Default - Copy,,0,0,0,Sien,{\an5\blur0.7\c&HE3E3E3&\bord0}Dia akan mengerti emosi manusia.
Dialogue: 0,0:02:13.90,0:02:19.74,Default - Copy,,0,0,0,Sien,{\an5\fsp0.4\blur0.6\c&HE3E3E3&\bord0\fs30\b0\fscx133\fscy146\pos(644.724,423.619)}Didedikasikan untuk mereka yang tidak tahu apa itu cinta.
Dialogue: 0,0:02:09.48,0:02:11.48,Default,,0,0,0,,`,
      l_id:0,
      line:[
      {
        'index':'1',
        'start':'5',
        'end':'Lorem 1',
        'style':'Lorem 1',
        'actor':'Lorem 1',
        'effect':'Lorem 1',
        'line':'Lorem Ipsum Dolor Sit Amet tes 1',
      },
      {
        'index':'1',
        'start':'5',
        'end':'Lorem 1',
        'style':'Lorem 1',
        'actor':'Lorem 1',
        'effect':'Lorem 1',
        'line':'Lorem Ipsum Dolor Sit Amet tes 2',
      },
      {
        'index':'1',
        'start':'Lorem 1',
        'end':'Lorem 1',
        'style':'Lorem 1',
        'actor':'Lorem 1',
        'effect':'Lorem 1',
        'line':'Lorem Ipsum Dolor Sit Amet tes 3',
      },

      ],
    }
  },
  beforeCreate:function(){
      let assjs = document.createElement('script');    
      assjs.setAttribute('src',"https://cdn.jsdelivr.net/npm/assjs/dist/ass.js");
      document.head.appendChild(assjs);
  },
  mounted:function(){

      document.querySelectorAll('#tabelpg2')[0].addEventListener('scroll',(e)=>{
        document.querySelectorAll('#tblpg1')[0].scrollTop=document.querySelectorAll('#tabelpg2')[0].scrollTop;
      })

      document.querySelectorAll('.file')[0].addEventListener('mouseover',(e)=>{
       if(!this.panel){
         document.getElementById('keteranganpanel1').classList.add('animated');   
        document.getElementById('keteranganpanel1').classList.add('bounceInRight');        
         document.getElementById('keteranganpanel1').style.display='';
       }
        
      })

      document.querySelectorAll('.file')[0].addEventListener('mouseout',(e)=>{
        if(!this.panel){
         document.getElementById('keteranganpanel1').style.display='none';
        }
      })
      

    ///////////////////////

    document.querySelectorAll('.edit')[0].addEventListener('mouseover',(e)=>{
        if(!this.panel){
        document.getElementById('keteranganpanel2').classList.add('animated');   
        document.getElementById('keteranganpanel2').classList.add('bounceInRight');        
         document.getElementById('keteranganpanel2').style.display='';
        }
      })
    

      document.querySelectorAll('.edit')[0].addEventListener('mouseout',(e)=>{
        if(!this.panel){
         document.getElementById('keteranganpanel2').style.display='none';
        }
      })


    ///////////////////////

    ///////////////////////

    document.querySelectorAll('.subtitle')[0].addEventListener('mouseover',(e)=>{
        if(!this.panel){
        document.getElementById('keteranganpanel3').classList.add('animated');   
        document.getElementById('keteranganpanel3').classList.add('bounceInRight');        
         document.getElementById('keteranganpanel3').style.display='';
        }
      })

      document.querySelectorAll('.subtitle')[0].addEventListener('mouseout',(e)=>{
        if(!this.panel){
         document.getElementById('keteranganpanel3').style.display='none';
        }
      })


    ///////////////////////

    ///////////////////////

    document.querySelectorAll('.video')[0].addEventListener('mouseover',(e)=>{
        if(!this.panel){
        document.getElementById('keteranganpanel4').classList.add('animated');   
        document.getElementById('keteranganpanel4').classList.add('bounceInRight');        
         document.getElementById('keteranganpanel4').style.display='';
        }
      })

      document.querySelectorAll('.video')[0].addEventListener('mouseout',(e)=>{
        if(!this.panel){
         document.getElementById('keteranganpanel4').style.display='none';
        }
      })


    ///////////////////////

///////////////////////

    document.querySelectorAll('.help')[0].addEventListener('mouseover',(e)=>{
        if(!this.panel){
        document.getElementById('keteranganpanel5').classList.add('animated');   
        document.getElementById('keteranganpanel5').classList.add('bounceInRight');        
         document.getElementById('keteranganpanel5').style.display='';
        }
      })

      document.querySelectorAll('.help')[0].addEventListener('mouseout',(e)=>{
        if(!this.panel){
         document.getElementById('keteranganpanel5').style.display='none';
        }
      })


    ///////////////////////

    ///////////////////////

    document.querySelectorAll('.export')[0].addEventListener('mouseover',(e)=>{
        if(!this.panel){
        document.getElementById('keteranganpanel6').classList.add('animated');   
        document.getElementById('keteranganpanel6').classList.add('bounceInRight');        
         document.getElementById('keteranganpanel6').style.display='';
        }
      })

      document.querySelectorAll('.export')[0].addEventListener('mouseout',(e)=>{
        if(!this.panel){
         document.getElementById('keteranganpanel6').style.display='none';
        }
      })


    ///////////////////////


         axios.get(this.assfile).then((res)=>{
        this.placeholder=res.data;
      axios.post('https://aegcanvas.herokuapp.com/upload',{'data':res.data})
      .then((response)=>{
        this.line=response.data;
      })
      .catch((error)=>{
        console.log(error);
      })
    })

    var interval=setInterval(function(){
      if(document.getElementById('video1').readyState>=3){
        document.querySelectorAll('.textarea')[0].click();
        clearInterval(interval);
       document.querySelectorAll('.loaderanimate')[0].style.display='none';
       
      }
    },500)

  document.querySelectorAll('.file')[0].addEventListener('click',(e)=>{
    document.querySelectorAll('#i_file')[0].click();
  })

   document.querySelectorAll('.textarea')[0].addEventListener('click',(e)=>{
     this.render_reset();
     this.render();
   })

    document.querySelectorAll('.textarea')[0].addEventListener('input',(e)=>{
      this.input_bawah();
   })

   
    var textbox=document.querySelectorAll('textarea')[0];
    textbox.addEventListener('input',(e)=>{
      this.highlight();
    })


document.querySelectorAll('#i_file')[0].addEventListener('change',(e)=>{
      if(e.target.files[0].name.match(/(.mp4|.mkv)/)){
         var files=URL.createObjectURL(e.target.files[0])
         this.vid=files;
          document.getElementById('video1').load();
      }
       if(e.target.files[0].name.match(/.ass/)){
        var files=URL.createObjectURL(e.target.files[0])
        this.assfile=files;
        this.loadfromfile(files);
      }
     
    })


  },
  methods:{
    render_reset:function(){
      
      fetch(this.assfile)
  .then(res => res.text())
  .then((text) => {
   this.ass = new ASS(this.placeholder, document.getElementById('video1'), {

  container: document.getElementById('debug1'),
});

    this.ass.destroy();
  });


      document.querySelectorAll('#debug1 svg').forEach((a,b)=>{a.outerHTML='';})
      let stage=document.querySelectorAll('.ASS-stage');
      stage.forEach((a)=>{
        a.outerHTML='';
      })
    },
    render:function(){
           fetch(this.assfile)
  .then(res => res.text())
  .then((text) => {
   this.ass = new ASS(this.placeholder, document.getElementById('video1'), {

  container: document.getElementById('debug1'),
});

  });
    },

    enter:function(){
      this.render_reset();
         fetch(this.assfile)
  .then(res => res.text())
  .then((text) => {
   this.ass = new ASS(this.placeholder, document.getElementById('video1'), {

  container: document.getElementById('debug1'),
});

    
  });
      document.querySelectorAll('.playground')[this.l_id+1].click();
    },
    enter2:function(){
      this.render_reset();
         fetch(this.assfile)
  .then(res => res.text())
  .then((text) => {
   this.ass = new ASS(this.placeholder, document.getElementById('video1'), {

  container: document.getElementById('debug1'),
});

    
  });
      document.querySelectorAll('.playground')[this.l_id+1].focus();
      document.querySelectorAll('.playground')[this.l_id+1].click();
    },
    tab:function(){
      this.render_reset();
         fetch(this.assfile)
  .then(res => res.text())
  .then((text) => {
   this.ass = new ASS(this.placeholder, document.getElementById('video1'), {

  container: document.getElementById('debug1'),
});

    
  });
      document.querySelectorAll('.playground')[this.l_id+1].click();

    },
    click:function(i){
      this.sementara=document.querySelectorAll('.playground')[i].value
      document.querySelectorAll('#debug1 svg').forEach((a,b)=>{a.outerHTML='';})
      this.render_reset();
         fetch(this.assfile)
  .then(res => res.text())
  .then((text) => {
   this.ass = new ASS(this.placeholder, document.getElementById('video1'), {

  container: document.getElementById('debug1'),
});

    
  });
      this.l_id=i
    },
    highlight:function(){
      this.render_reset();
         fetch(this.assfile)
  .then(res => res.text())
  .then((text) => {
   this.ass = new ASS(this.placeholder, document.getElementById('video1'), {

  container: document.getElementById('debug1'),
});

    
  });
      document.querySelectorAll('textarea')[0].innerHTML='123';
    },
    input_bawah:function(i){
      var tempor=[];
      var line=this.placeholder.match(/Dialogue: \d+,\d+:\d+:\d+.\d+,\d+:\d+:\d+.\d+,[\w\d\s+-]+,([\w\d]+|),\d+,\d+,\d+,(\w+|),(.*)/g);
      line.forEach((a,i)=>{
        var nice=a.replace(/(Dialogue: \d+,\d+:\d+:\d+.\d+,\d+:\d+:\d+.\d+,[\w\d\s+-]+,([\w\d]+|),\d+,\d+,\d+,(\w+|),)(.*)/,'$1'+this.line[i].line);
        tempor.push(nice);
      })
      this.placeholder=this.placeholder.replace(/Dialogue[\s\S]+/,tempor.join('\n'))
      this.render_reset();
      this.render();
  },
    dblclick_bawah:function(i){
      document.getElementById('video1').currentTime=this.line[i].start;
    },
    loadfromurl:function(x){
      axios.get(x).then((res)=>{
        this.placeholder=res.data;
        axios.post('https://aegcanvas.herokuapp.com/upload',{'data':res.data})
      .then((response)=>{
        this.line=response.data;
      })
      .catch((err)=>{
        console.log(err);
      })
      })
      .catch((error)=>{
        console.log(error);
      })
    },
    loadfromfile:function(x){
       axios.get(x).then((res)=>{
        this.placeholder=res.data;
      axios.post('https://aegcanvas.herokuapp.com/upload',{'data':res.data})
      .then((response)=>{
        this.line=response.data;
      })
      .catch((error)=>{
        console.log(error);
      })
    })
    },
    urlico:function(e){

        if(e.target.style.borderBottom.length>0){
          document.querySelectorAll('#vidobj')[0].style.display='none';
      document.querySelectorAll('.subtitle')[0].style.borderBottom='';
       document.querySelectorAll('.video')[0].style.borderBottom='';
       document.querySelectorAll('#urlobj')[0].style.display='none';
       this.panel=false;
        }
        else{
           document.querySelectorAll('#vidobj')[0].style.display='none';
      document.querySelectorAll('.subtitle')[0].style.borderBottom='';
       document.querySelectorAll('.video')[0].style.borderBottom='';

           this.panel=true;
      document.getElementById('keteranganpanel3').style.display='none';
      document.querySelectorAll('#urlobj')[0].style.display='';
       document.querySelectorAll('#urlobj')[0].classList.add('animated')
        document.querySelectorAll('#urlobj')[0].classList.add('slideInRight')
      document.querySelectorAll('.subtitle')[0].style.borderBottom='solid 1px #4b86ff';
     
        }
      

     
    },
    vidico:function(e){
      if(e.target.style.borderBottom.length>0){
          document.querySelectorAll('#vidobj')[0].style.display='none';
      document.querySelectorAll('.subtitle')[0].style.borderBottom='';
       document.querySelectorAll('.video')[0].style.borderBottom='';
       document.querySelectorAll('#urlobj')[0].style.display='none';
       this.panel=false;
      }

      else{
          document.querySelectorAll('#urlobj')[0].style.display='none';
      document.querySelectorAll('.subtitle')[0].style.borderBottom='';
       document.querySelectorAll('.video')[0].style.borderBottom='';
      
           this.panel=true;
      document.getElementById('keteranganpanel4').style.display='none';
      document.querySelectorAll('#vidobj')[0].style.display='';
       document.querySelectorAll('#vidobj')[0].classList.add('animated')
        document.querySelectorAll('#vidobj')[0].classList.add('slideInRight')
      document.querySelectorAll('.video')[0].style.borderBottom='solid 1px #4b86ff';

      }
      
       
      
    },
    urlController:function(){
      this.loadfromurl(this.assfile);
    },
    videoController:function(){
      document.querySelectorAll('#video1')[0].load();
    },
    exportass:function(){
       var a = document.createElement("a");
       var file = new Blob([this.placeholder], {type: 'text/plain'});
       a.href = URL.createObjectURL(file);
        a.download = 'export_aegcanvas.ass';
        a.click();
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.beta{
  cursor:none;
  pointer-events:none;
      position: absolute;
    margin-top: 40px;
    margin-left: -20px;
    font-size: 50px;
}

.loaderanimate{
background-color:#1c2128;position:fixed;height:100%;width:100%;padding:0px;margin:0px;z-index:200;
display: block;
}
/* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1; 

}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #888; 
     border:0px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555; 
    
}
.nv{
  width:100%;
  margin-left:-7px;
  height: 31px;
}
.logo{
  font-weight:lighter;
  font-size:20px;
  margin-left: 7px;
  padding-top:3px;
}
#navya{
  cursor:pointer;
  font-size:12px;
  border-radius: 1px;
  margin-left:20px;
  padding-top:8px;
  padding-bottom:16px;
  height: 100%;
  padding-left:5px;
  padding-right:5px;
}
#navya:hover{
    border-bottom:solid 1px #4b86ff;
}
.nv-ul{
  list-style-type: none;
  margin: 0;
  margin-left:27px;
  padding: 0;
  display: inline-flex;
}
.navigasi{
  background-color:#1c2128;
  padding:13px;
  padding-top:10px;
  color:#fbfbfb;
  display: flex;
}
.textarea{
    background-color: #1c2128;
    border: 0px;
    padding: 10px;
    padding-left: 15px;
    font-weight: 100;
    font-size: 14px;
    color: #fbfbfb;
    outline: none;
    width: 100%;
    border-radius: 5px;
    height: 100%;

}
.aegisubline{
  border:0px;
  padding:0px;
  text-align: center;
  outline:none;
}

.playground{
  border:0px;
  padding:0px;
  outline:none;
}


th{
  padding:0px;
}

video {
  object-fit: fill;
}

</style>
