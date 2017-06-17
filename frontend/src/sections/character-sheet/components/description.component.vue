<script>
export default {

}
</script>
<style>
.main-field {
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: black;
    border-radius: 0;
    box-shadow: none;
}
</style>

<template>
    <!-- Character Basic Details -->
    <div class="row">
        <div class="col-md-4 hidden-lg hidden-md">
            <img src="assets/images/dnd-logo.png" alt="" width="100%">
        </div>
        <div class="col-md-4">
            <div class="row">
                <div class="col-md-12">
                    <input type="text" class="form-control main-field"></input>
                    <label>Character Name</label>
                </div>
                <div class="col-md-12">
                    <input type="text" class="form-control main-field"></input>
                    <label>Class and Level</label>
                </div>
                <div class="col-md-12 visible-xs">
                    <input type="text" class="form-control main-field"></input>
                    <label>Player Name</label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-md-3">
                    <input type="text" class="form-control main-field"></input>
                    <label>Size</label>
                </div>
                <div class="col-xs-3 col-md-3">
                    <input type="text" class="form-control main-field"></input>
                    <label>Age</label>
                </div>
                <div class="col-xs-3 col-md-3">
                    <input type="text" class="form-control main-field"></input>
                    <label>Gender</label>
                </div>
                <div class="col-xs-3 col-md-3">
                    <input type="text" class="form-control main-field"></input>
                    <label>Height</label>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="row hidden-xs">
                <div class="col-md-12">
                    <input type="text" class="form-control main-field"></input>
                    <label>Player Name</label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-4 col-md-4">
                    <input type="text" class="form-control main-field"></input>
                    <label>Race</label>
                </div>
                <div class="col-xs-4 col-md-4">
                    <input type="text" class="form-control main-field"></input>
                    <label>Alignment</label>
                </div>
                <div class="col-xs-4 col-md-4">
                    <input type="text" class="form-control main-field"></input>
                    <label>Deity</label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-3 col-md-3">
                    <input type="text" class="form-control main-field"></input>
                    <label>Weight</label>
                </div>
                <div class="col-xs-3 col-md-3">
                    <input type="text" class="form-control main-field"></input>
                    <label>Eyes</label>
                </div>
                <div class="col-xs-3 col-md-3">
                    <input type="text" class="form-control main-field"></input>
                    <label>Hair</label>
                </div>
                <div class="col-xs-3 col-md-3">
                    <input type="text" class="form-control main-field"></input>
                    <label>Skin</label>
                </div>
            </div>
        </div>
        <div class="col-md-4 visible-lg visible-md">            
            <img src="assets/images/dnd-logo.png" alt="" width="100%" height="100%">
        </div>
    </div>
</template>

