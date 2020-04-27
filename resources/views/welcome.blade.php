<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <!-- vuetifyJs -->
        
       

        <!-- Vue JS -->
     
    </head>
    <body>
        <div id="app">
           <v-app>
            
           </v-app>
        </div>



        <script src="{{ asset('js/app.js')}}"></script>
        <script src="{{asset('https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js')}}"></script>
        <script src="{{asset('https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js')}}"></script>
        <script src="{{asset('https://cdn.jsdelivr.net/npm/vue')}}"></script>
    </body>
    
</html>
