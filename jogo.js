var rodada = 1;
var matriz_jogo = Array(3);
  
  matriz_jogo['a'] = Array(3);
  matriz_jogo['b'] = Array(3);
  matriz_jogo['c'] = Array(3);
    
    matriz_jogo['a'][1] = 0;
    matriz_jogo['a'][2] = 0;
    matriz_jogo['a'][3] = 0;

    matriz_jogo['b'][1] = 0;
    matriz_jogo['b'][2] = 0;
    matriz_jogo['b'][3] = 0;

    matriz_jogo['c'][1] = 0;
    matriz_jogo['c'][2] = 0;
    matriz_jogo['c'][3] = 0;
$(document).ready( function(){
  $('#btn_iniciar_jogo').click( function(){
    
      //Alerta de validação do preenchimento do apelido
        if($('#entrada_apelido_jogador_1').val() == ''){
          alert('Preencha o campo do apelido do jogador 1');
          return false;
        }
        if($('#entrada_apelido_jogador_2').val() == ''){
          alert('Preencha o campo do apelido do jogador 2');
          return false;
        }    
          
      
      
      //Exibir nome do jogador
          $('#nome_jogador1').html($('#entrada_apelido_jogador_1').val());
          $('#nome_jogador2').html($('#entrada_apelido_jogador_2').val());

      //Controlar visualização da janela inicial e do ínicio do jogo
          $('#pagina_inicial').hide();
          $('#palco_jogo').show();

  });
      //Evento de clicar em um campo em branco no jogo
          $('.jogada').click( function(){
           var elemento_id = this.id;
           $('#' + elemento_id).off();
           jogada(elemento_id); 
            
  });
      //Detecção das jogadas
          function jogada(id){
            var icone = '';
            var ponto = 0;

            if((rodada % 2) == 1){
              icone = 'url("imagens/marcacao_1.png")';
              ponto = -1;
            } else {
              icone = 'url("imagens/marcacao_2.png")';  
              ponto = 1;
            }
            rodada++;

            $('#' + id).css('background-image', icone);

            var linha_coluna = id.split('-');

            matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;
              verifica_combinacao();
          }
      
      //Verificação do valores inseridos para definir um campeão
       
        function verifica_combinacao(){
        
          //Horizontal
          var pontos = 0;
          for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['a'][i];
          }
          ganhador(pontos);

          pontos = 0;
          for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['b'][i];
          }
          ganhador(pontos);

          pontos = 0;
          for(var i = 1; i <= 3; i++){
            pontos = pontos + matriz_jogo['c'][i];
          }
          ganhador(pontos);

          //Vertical
          
          for(var l = 1; l <= 3; l++){
            pontos = 0;
            pontos += matriz_jogo['a'][l];
            pontos += matriz_jogo['b'][l];
            pontos += matriz_jogo['c'][l];

              ganhador(pontos);
          }

          //Diagonal
          pontos = 0;
          pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
          ganhador(pontos);

          pontos = 0;
          pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];

          ganhador(pontos);
    }

    function ganhador(pontos) {
      if(pontos == -3){
        var jogador_1 = $('#entrada_apelido_jogador_1').val();
        alert(jogador_1 +' ganhou a partida.');
        $('.jogada').off();
      } else if (pontos == 3){
        var jogador_2 = $('#entrada_apelido_jogador_2').val();
        alert(jogador_2 + ' ganhou a partida.');
        $('.jogada').off();
      }
    }
  
  })