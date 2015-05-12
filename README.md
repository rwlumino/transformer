# transformer
Light-weight CSS transform plugin
<head>
	<!-- Transformer Plugin by Reuben @dalegroup.net -->
    <link rel="stylesheet" type="text/css" href="transformer.css">
    <style>
        body{ font-family:sans-serif; background:#f3f3f3; }
        hr{ border-color:#f8f8f8; }
        .clearfix{ clear:both; }
        .container{ width:500px; background:none; float:left; border:none; margin-left:15px ; }                   
        .container div{ background:#f8f8f8; display:inline-block;float:left; width:150px; border:1px solid #d3d3d3; padding:10px; text-align:center; }
        .container.basic div{ margin:50px 50px 50px 0; }
        .container.diagonal h4{ margin-bottom:50px; }
        .container.diagonal div{ margin:50px 0 90px;  }
        .container h1{ margin:5px 0 5px; }
        .container h3{ margin-bottom:20px; }
        .container h4{ margin:5px 0 5px; padding-bottom:5px; border-bottom:#e3e3e3 solid 2px; }

    </style>
    <title>Transformer.css Test</title>
</head>
<body>
    <div class="container">
        <h1>CSS Transformer Plugin</h1>
        <h3>by Reuben @dalegroup.net</h3>
    </div>
    <div class="clearfix"></div>
    <div class="container basic">
        <h4>Basic Rotations / Flips</h4>
        <div class="down anim">down</div>
        <div class="up anim">up</div>
        <div class="left">left</div>
        <div class="right">right</div>
        <div class="flip-h">flip-h</div>
        <div class="flip-v">flip-v</div>
    </div>
    <div class="container diagonal">
        <h4>Diagonal Rotations</h4>
        <div class="diag down">diagonal down</div>
        <div class="diag up">diagonal up</div>
        <div class="diag left">diagonal left</div>
        <div class="diag right">diagonal right</div>
    </div>
</body>
