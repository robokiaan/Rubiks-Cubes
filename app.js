jQuery(document).ready(function() {
    jQuery('.U').html(`
        <img src="U-RCM.png" class="step"><br>
        <b>U</b>
    `)
    jQuery('.R').html(`
        <img src="R-RCM.png" class="step"><br>
        <b>R</b>
    `)
    jQuery('.D').html(`
        <img src="D-RCM.png" class="step"><br>
        <b>D</b>
    `)
    jQuery('.L').html(`
        <img src="L-RCM.png" class="step"><br>
        <b>L</b>
    `)
    jQuery('.F').html(`
        <img src="F-RCM.png" class="step"><br>
        <b>F</b>
    `)
    jQuery('.Y').html(`
        <img src="Y-RCM.png" class="step"><br>
        <b>Y</b>
    `)
    jQuery(".U-prime").html(`
        <img src="U'-RCM.png" class="step"><br>
        <b>U'</b>
    `)
    jQuery(".R-prime").html(`
        <img src="R'-RCM.png" class="step"><br>
        <b>R'</b>
    `)
    jQuery(".L-prime").html(`
        <img src="L'-RCM.png" class="step"><br>
        <b>L'</b>
    `)
    jQuery(".D-prime").html(`
        <img src="D'-RCM.png" class="step"><br>
        <b>D'</b>
    `)
    jQuery(".F-prime").html(`
        <img src="F'-RCM.png" class="step"><br>
        <b>F'</b>
    `)
    jQuery('.screen').hide()
    jQuery('.beginners-method').show()
})

function nav(screen) {
    jQuery('.screen').hide()
    jQuery(`.${screen}`).show()
}

function input() {
    var x = jQuery('#steps').val()
    var y = x
    var x = String(x).split(' ')
    jQuery('.notation-translator').html('<input type="text" placeholder="Steps" value="' + y + '" id="steps" class="form-control" onchange="input()">')
    for (i = 0; i < x.length; i++) {
        x[i] = String(x[i] + '-RCM.png').toUpperCase()
        jQuery('.notation-translator').append(`
            <img src="${x[i]}" class="step">
        `)
    }
}