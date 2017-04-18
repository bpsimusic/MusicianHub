export default `#cloudinary-overlay.with_theme {
  display: block;
}
element.style {
  height: 400px;
}
#cloudinary-overlay {
  background-color: rgba(0,0,0,0.7);
}
#cloudinary-widget {
  height: 200px;
  width: 96.665px;
  background: #ffffff;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
  border-radius: 0;
  border: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

#cloudinary-navbar {
  display:none;
  background: #fff;
  border: none;
  border-bottom: 1px solid #eee;
  margin: 0 0 10px 0;
  height: 30px;
}
#cloudinary-navbar .source {
  border-color: none;
  border-right: 0px;
  border-bottom: 3px solid none;
  height: 30px;
}
#cloudinary-navbar .source .label {
  font-size: 14px;
  line-height: 22px;
}
#cloudinary-navbar .source .icon {
  display: none;
}
#cloudinary-navbar .source.active {
  background: none;
  border-bottom: 3px solid #037FCB;
}
#cloudinary-navbar .source.active .label {
  color: #000;
}
#cloudinary-widget .drag_area {
  background: #fff;
  border: 2px dashed #ddd;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  margin: 0px 20px 0px 20px;
  height: 200px;
}
#cloudinary-widget .drag_area.in {
  border-color: #01BB16
}
#cloudinary-navbar .sources .icon {
  background-position-x: 0px ;
}
#cloudinary-navbar .close {
  color: rgb(85, 85, 85);
}
#cloudinary-widget .button, #cloudinary-widget .button.small_button {
  box-sizing: border-box;
  color: #037FCB;
  background: none;
  border: 2px solid #037FCB;
}
#cloudinary-widget .button {
  height: 45px;
  width: 180px;
  line-height: 30px;
}
#cloudinary-widget .button.small_button {
  height: 35px;
  width: 140px;
  line-height: 25px;
}
#cloudinary-widget .button:hover, #cloudinary-widget .button.small_button:hover, #cloudinary-widget .upload_button_holder:hover .button {
  background: #037FCB;
  color: #fff;
}
#cloudinary-widget .panel {
  height: 400px;
}
#cloudinary-overlay.inline .widget {
    margin-top: 0px;
    top: 0;
    height: 250px;
    width: 100%;
    box-shadow: none;
    box-sizing: border-box;
    border: 1px solid #b6ccd9;
}
#cloudinary-widget .panel.local {
  margin-top: 20px;
}
#cloudinary-widget .panel.local .drag_area .drag_content .label {
  color: #00619D;
  font-size: 22px;
}
#cloudinary-widget .panel.progress .thumbnails {
  margin-top: 4px;
}
#cloudinary-widget .panel.camera .form .button_holder {
  margin-top: 10px;
  margin-bottom: 10px;
}
#cloudinary-widget .panel.camera .note {
  font-weight: normal;
  font-size: 13px;
  padding: 4px 20px 4px 20px;
}
#cloudinary-widget .panel.camera video {
  border-width:0px;
}
#cloudinary-widget .camera .form {
  background:#fff;
  border: 1px solid #eee;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  margin: 0px 20px 0px 20px;
  padding-top: 10px;
}
#cloudinary-overlay.inline .widget {
  border: 1px solid #ddd;
}


.widget .powered_by_cloudinary.active {
    display: none;
}

#cloudinary-widget .panel.local .drag_area .drag_content .label_multiple,
.widget.multiple_enabled .panel.local .drag_area .drag_content .or {
  display: block;
}

.widget .panel.local .drag_area .drag_content {
  margin-top: 30px;
}

.widget .panel.progress .thumbnails .thumbnail .image_holder {
  width: 100%;
}

.thumbnail.failed.with_placeholder {
  height: 190px;
}
`;
