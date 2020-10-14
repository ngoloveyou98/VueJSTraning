<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="css/app.css">
</head>
<body>
    <div id="app">
        <democomponent/>
       
    </div>
    <hr>
    @yield('content')

    <script src="{{ asset('js/app.js') }}" defer></script>

</body>
</html>