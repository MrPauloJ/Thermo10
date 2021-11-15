
/*Variáveis*/
var perguntas,gCalorias,timeTimeout, respostas, Dic, i, bt, x, dicas, saco_exercicio, quitanda, posicao, posGreen, posRed, posYellow, posBlue, goalPositionGreen, goalPositionRed, goalPositionBlue, goalPositionYellow, Vez, Novo_num_Dado, Canvas, ctx, img, DadoA, DadoB, DadoC, DadoD, Qtd_Voltas, goalConfirmed, Base, saida, ok, End;
var Jgdr=[0,false,false,false,false];
var qp=0,qc=0,ql=0, Dic = 0;
var comidaSelecionada=[[0,0],[0,0,0],[0,0]];
var PJS=0;
var nRespondeu=true;
var lastPos=[0,0];
var lastGamer=0;
	End = [0, false, false, false, false];
	EndSong = [0, false, false, false, false];
	DadoA = [0, 0];
	DadoB = [0, 14];
	DadoC = [0, 42];
	DadoD = [0, 28];
	Vez = Math.floor((Math.random()*4) + 1);
	saida = [0,0,0,0,0];
	// Ok = Um peao fora da base
ok = [0, true, true, true, true];
Base = [0, false, false, false, false];
	goalConfirmed = [0, false, false, false, false];
	Qtd_Voltas = [0,0,0,0,0];
	bt=[0,"BtA", "BtB", "BtC", "BtD"];
	dv=[0,0,0,0];
dicasPergunta=[
"<img src='Imgs/imgDicas/ProcessosExotermicos.png'/> <br> Todas as reações químicas de combustão são processos exotérmicos,"
+" ou seja, ocorre liberação de energia (∆H < 0).",

"A ∆H positiva indica que o fluxo de energia ocorre da vizinhança (meio"
+" ambiente) para o sistema (reação) e o ∆H negativo indica que o fluxo de"
+" energia ocorre sistema (reação) para a vizinhança (meio ambiente). A"
+" entalpia padrão de formação (H<sub>f</sub>º) de uma substância composta é"
+" determinada a partir da variedade alotrópica mais comum (substância"
+" simples mais comum).",

"<img src='Imgs/imgDicas/ProcessosExotermicos.png'/>",

"<img src='Imgs/imgDicas/Equivale_cal_Joule.png'/>",

"<img src='Imgs/imgDicas/SistemaEquivalencia_Mol_MM.png'/> <br> Ex: A formação de 1 mol de água a ΔH = - 286 KJ; como existe uma "
+"relação de proporcionalidade entre o nº de mol, a massa e quantidade "
+"de energia envolvida na formação das substâncias; nós podemos utilizar "
+"estas informações e estabelecer relações de proporcionalidades, no "
+"caso da água, se quisermos saber quanto de energia estará envolvida "
+"na formação de 1 Kg de água: <br>"
+"<img src='Imgs/imgDicas/SistemaEquivalencia_Mol_MM1.png'/> <br> Essas relações de proporcionalidades podem ser feitas para "
+"qualquer tipo de substância.",

"Existe uma relação direta de proporcionalidade, neste caso, entre o volume e a quantidade de Kcal.",

"Para calcularmos quanto energia um alimento pode fornecer quando é digerido, devemos saber a sua composição em massa de: "
+" proteínas, carboidratos e lipídeos; para podermos determinar o seu valor energético. "
+"Então: E<sub>alimento</sub> = E<sub>proteínas</sub> + E<sub>carboidratos</sub> + E<sub>lipídeos</sub><br>"
+"<img src='Imgs/imgDicas/tabelaEalimento.png'/><br> Para essa quantidade de alimento o seu valor energético será de"
+" 720,9 KJ. Para uma quantidade maior de energia será necessário uma quantidade maior do alimento.",

"<img src='Imgs/imgDicas/Form_QtdeCalor.png'/>",

"<img src='Imgs/imgDicas/Form_QtdeCalor.png'/> <br> <img src='Imgs/imgDicas/Equivale_cal_Joule.png'/>",

"Consequências da Lei de Hess:<br>"
+" Ao inverter uma reação termoquímica, deve-se trocar o sinal do ΔH,"
+" pois, se em determinado sentido a reação libera calor (exotérmica),"
+" em sentido contrário, a reação terá de absorver a mesma quantidade"
+" de calor que havia liberado (endotérmica), e vice-versa.<br>"
+"Ex: <img src='Imgs/imgDicas/tabela1.png'/> <br> Multiplicando (ou dividindo) uma equação termoquímica por um"
+" número diferente de zero, o valor de ΔH será também multiplicado (ou dividido) por esse número.<br>"
+"Ex:<img src='Imgs/imgDicas/Lei_de_Hess_D.png'/><br>As equações termoquímicas podem ser somadas como se fossem equações matemáticas."
+"Ex: <img src='Imgs/imgDicas/Lei_de_Hess_C.png'/>",

"<img src='Imgs/imgDicas/MudancasEstadosFisicos.png'/> <br> Nos processos endotérmicos o fluxo de energia ocorre da vizinhança"
+" (meio ambiente) para o sistema (reação/mudança de estado físico)",

"<img src='Imgs/imgDicas/MudancasEstadosFisicos.png'/> <br> Todas as reações químicas de combustão são processos onde ocorre liberação de energia (ΔH < 0).",

"<img src='Imgs/imgDicas/MudancasEstadosFisicos.png'/> <br> Todas as reações químicas de combustão são processos onde ocorre liberação de energia (ΔH < 0).",

"Para calcular a entalpia da reação temos: <br><img src='Imgs/imgDicas/Form_Calculo_deltaH.png'/>",

"Reação de combustão: combustível + O<sub>2(g)</sub> -> CO<sub>2(g)</sub> + H<sub>2</sub>O; pela"
+" equação a quantidade de CO<sub>2(g)</sub> é proporcional a quantidade de C do"
+" combustível a ser analizado; portanto, podemos calcular a quantidade"
+" de energia em função do CO<sub>2(g)</sub>, dividindo a energia liberada pelo"
+" número de carbono do combustível e depois coloca-los em ordem crescente.",

"<img src='Imgs/imgDicas/ProcessosExotermicos.png'/>",

"<img src='Imgs/imgDicas/ProcessosExotermicos.png'/>",

"A ΔH positiva indica que o fluxo de energia ocorre da vizinhança (meio ambiente). para o sistema (reação) e o ΔH negativo indica que o fluxo de"
+" energia ocorre sistema (reação) para a vizinhança (meio ambiente).",

"Para calcular a entalpia da reação temos: <br><img src='Imgs/imgDicas/Form_Calculo_deltaH.png'/> <br>"
+"Depois de encontrar o ΔH, calcule a variação total de energia utilizando uma regra de três seguindo a relação abaixo:<br> <img src='Imgs/imgDicas/tabela2.png'/>",

"<img src='Imgs/imgDicas/MudancasEstadosFisicos.png'/>",

"<img src='Imgs/imgDicas/MudancasEstadosFisicos.png'/>",

"Para calcular a entalpia da reação temos: <br><img src='Imgs/imgDicas/Form_Calculo_deltaH.png'/>",

"<img src='Imgs/imgDicas/Endo_Grafico_A.png'/> <br> <img src='Imgs/imgDicas/Exo_Grafico_A.png'/>",

"<img src='Imgs/imgDicas/Endo_Grafico_A.png'/> <br> <img src='Imgs/imgDicas/tabela3.png'/><br>"
+"Encontrando as massas molares das substâncias você poderá relacionar com a quantidade de energia liberada.<br>"
+"-> utilizar a fórmula da densidade para transformar o volume em massa, para cada substância.<br>"
+"-> e depois calcular a quantidade de energia liberada para cada amostra, utilizando uma regra de três envolvendo a massa e a quantidade de energia.",

"<img src='Imgs/imgDicas/MudancasEstadosFisicos.png'/>",

"O comportamento químico de ambos são semelhantes em relação ao fluxo energético (ΔH).",

"Consequências da Lei de Hess:<br>"
+" Ao inverter uma reação termoquímica, deve-se trocar o sinal do ΔH,"
+" pois, se em determinado sentido a reação libera calor (exotérmica),"
+" em sentido contrário, a reação terá de absorver a mesma quantidade"
+" de calor que havia liberado (endotérmica), e vice-versa.<br>"
+"Ex: <img src='Imgs/imgDicas/tabela1.png'/> <br> Multiplicando (ou dividindo) uma equação termoquímica por um"
+" número diferente de zero, o valor de ΔH será também multiplicado (ou dividido) por esse número.<br>"
+"Ex:<img src='Imgs/imgDicas/Lei_de_Hess_D.png'/><br>As equações termoquímicas podem ser somadas como se fossem equações matemáticas."
+"Ex: <img src='Imgs/imgDicas/Lei_de_Hess_C.png'/>",

"Calor (ou entalpia) de combustão de uma substância é a variação de entalpia (quantidade de calor liberada) verificada na combustão total de 1 mol de uma"
+"determinada substância, supondo-se no estado padrão (T = 25 ºC e p = cte = 1 atm) todas as substâncias envolvidas nessa combustão.",

"-> Calor (ou entalpia) de combustão de uma substância é a variação de entalpia (quantidade de calor liberada) verificada na combustão total de 1 mol de uma "
+"determinada substância, supondo-se no estado padrão (T = 25 ºC e p = cte = 1 atm) todas as substâncias envolvidas nessa combustão.<br>"
+"-> Vários fatores são relevantes para explicar as diferenças dos calores de combustão dos compostos orgânicos entre eles estão: as forças intermoleculares, "
+"as massas molares, a geometria dos compostos, o tipo de função química, os diferentes tipos de ligações químicas existentes na molécula desse composto, os "
+"estados físicos, as formas alotrópicas.",

"<img src='Imgs/imgDicas/Endo_Grafico_A.png'/> <br> <img src='Imgs/imgDicas/Exo_Grafico_A.png'/>",

"<img src='Imgs/imgDicas/tabela4.png'/> <br>Depois de encontrar o número de mol de cada substância, utilize esse valor para efetuar o balanceamento"
+" e compare a quantidade de CO2 produzida para cada substância presente na tabela.",

"Consequências da Lei de Hess:<br>"
+" Ao inverter uma reação termoquímica, deve-se trocar o sinal do ΔH,"
+" pois, se em determinado sentido a reação libera calor (exotérmica),"
+" em sentido contrário, a reação terá de absorver a mesma quantidade"
+" de calor que havia liberado (endotérmica), e vice-versa.<br>"
+"Ex: <img src='Imgs/imgDicas/tabela1.png'/> <br> Multiplicando (ou dividindo) uma equação termoquímica por um"
+" número diferente de zero, o valor de ΔH será também multiplicado (ou dividido) por esse número.<br>"
+"Ex:<img src='Imgs/imgDicas/Lei_de_Hess_D.png'/><br>As equações termoquímicas podem ser somadas como se fossem equações matemáticas."
+"Ex: <img src='Imgs/imgDicas/Lei_de_Hess_C.png'/>",

"O conteúdo energético de uma substância composta é igual à soma das energias de todas as suas ligações.",

"É representada por H ou ΔH",

"Determine, para cada substância, o valor da energia liberada por átomo de carbono presente. Aquele que apresentar a "
+"menor relação C -> energia liberada, será responsável pela maior liberação de dióxido de carbono, levando em "
+"consideração que todos deveram fornecer a mesma quantidadede energia (KJ/ mol).",

"A entalpia é diretamente proporcional à massa de qualquer uma das substâncias presentes na reação química.<br> <img src='Imgs/imgDicas/SistemaEquivalencia_Mol_MM.png'/>'",

"<img src='Imgs/imgDicas/Form_QtdeCalor.png'/>",

"<img src='Imgs/imgDicas/R_P_set_Exo_Endo.png'/> <br> A entalpia é diretamente proporcional à massa da substância presentes na reação química.",

"Para calcular a entalpia da reação temos: <br><img src='Imgs/imgDicas/Form_Calculo_deltaH.png'/><br>"
+"Importante: Toda substância simples no estado padrão apresenta entalpia (H) = 0.",

"<img src='Imgs/imgDicas/SistemaEquivalencia_Mol_MM.png'/>",

"A ΔH positiva indica que o fluxo de energia ocorre da vizinhança para o sistema (reação) e o ΔH negativo indica que o fluxo de energia ocorre sistema (reação) para a vizinhança (meio ambiente)",

"<img src='Imgs/imgDicas/Equivale_cal_Joule.png'/>",

"Nos processos endotérmicos a entalpia do(s) produto(s) é sempre maior que a entalpia dos reagentes. <br>"
+"Para calcular a entalpia da reação temos: <br><img src='Imgs/imgDicas/Form_Calculo_deltaH.png'/>",

"<img src='Imgs/imgDicas/Endo_Grafico_A.png'/> <br> <img src='Imgs/imgDicas/Exo_Grafico_A.png'/>",

"Todas as reações químicas de combustão são processos onde ocorre liberação de energia (ΔH < 0).",

"<img src='Imgs/imgDicas/MudancasEstadosFisicos.png'/>",

"<img src='Imgs/imgDicas/Form_QtdeCalor.png'/>",

"Vários fatores são relevantes para explicar as diferenças dos calores de combustão dos compostos orgânicos entre eles estão: as forças intermoleculares, "
+"as massas molares, a geometria dos compostos, o tipo de função química, os "
+"diferentes tipos de ligações químicas existentes na molécula desse composto, os "
+"estados físicos, as formas alotrópicas.<br>"
+"Consequências da Lei de Hess:<br>"
+" Ao inverter uma reação termoquímica, deve-se trocar o sinal do ΔH,"
+" pois, se em determinado sentido a reação libera calor (exotérmica),"
+" em sentido contrário, a reação terá de absorver a mesma quantidade"
+" de calor que havia liberado (endotérmica), e vice-versa.<br>"
+"Ex: <img src='Imgs/imgDicas/tabela1.png'/> <br> Multiplicando (ou dividindo) uma equação termoquímica por um"
+" número diferente de zero, o valor de ΔH será também multiplicado (ou dividido) por esse número.<br>"
+"Ex:<img src='Imgs/imgDicas/Lei_de_Hess_D.png'/><br>As equações termoquímicas podem ser somadas como se fossem equações matemáticas."
+"Ex: <img src='Imgs/imgDicas/Lei_de_Hess_C.png'/>",

"Para calcular a entalpia da reação temos: <br><img src='Imgs/imgDicas/Form_Calculo_deltaH.png'/>",

"Consequências da Lei de Hess:<br>"
+" Ao inverter uma reação termoquímica, deve-se trocar o sinal do ΔH,"
+" pois, se em determinado sentido a reação libera calor (exotérmica),"
+" em sentido contrário, a reação terá de absorver a mesma quantidade"
+" de calor que havia liberado (endotérmica), e vice-versa.<br>"
+"Ex: <img src='Imgs/imgDicas/tabela1.png'/> <br> Multiplicando (ou dividindo) uma equação termoquímica por um"
+" número diferente de zero, o valor de ΔH será também multiplicado (ou dividido) por esse número.<br>"
+"Ex:<img src='Imgs/imgDicas/Lei_de_Hess_D.png'/><br>As equações termoquímicas podem ser somadas como se fossem equações matemáticas."
+"Ex: <img src='Imgs/imgDicas/Lei_de_Hess_C.png'/>",

"Consequências da Lei de Hess:<br>"
+" Ao inverter uma reação termoquímica, deve-se trocar o sinal do ΔH,"
+" pois, se em determinado sentido a reação libera calor (exotérmica),"
+" em sentido contrário, a reação terá de absorver a mesma quantidade"
+" de calor que havia liberado (endotérmica), e vice-versa.<br>"
+"Ex: <img src='Imgs/imgDicas/tabela1.png'/> <br> Multiplicando (ou dividindo) uma equação termoquímica por um"
+" número diferente de zero, o valor de ΔH será também multiplicado (ou dividido) por esse número.<br>"
+"Ex:<img src='Imgs/imgDicas/Lei_de_Hess_D.png'/><br>As equações termoquímicas podem ser somadas como se fossem equações matemáticas."
+"Ex: <img src='Imgs/imgDicas/Lei_de_Hess_C.png'/>",

"<img src='Imgs/imgDicas/Endo_Grafico_A.png'/>",

"A entalpia (ΔH) é proporcional à massa de qualquer uma das substâncias presentes na reação química.",

"<img src='Imgs/imgDicas/MudancasEstadosFisicos.png'/><br>"
+"->Todas as reações químicas de combustão são processos onde ocorre liberação de energia (ΔH < 0)."
+"<br> -> Todo processo de quebra de ligação (ou de forças intermoleculares) são endotérmicos; enquanto que os processos de formação de ligação (ou de forças intermoleculares) são exotérmicos.",

"<img src='Imgs/imgDicas/Endo_Grafico_A.png'/>"
];	
perguntas = [
["(ENEM_2016) Algumas práticas agrícolas fazem uso de queimadas, apesar de"
+" produzirem grandes efeitos negativos. Por exemplo, quando ocorre a queima da palha"
+" de cana de-açúcar, utilizada na produção de etanol, há emissão de poluentes como"
+" CO<sub>2</sub> , SO<sub>X</sub> , NO<sub>X</sub> e materiais particulados (MP) para a atmosfera. Assim, a produção de"
+" biocombustíveis pode, muitas vezes, ser acompanhada da emissão de vários poluentes."
+"<br> CARDOSO, A. A.; MACHADO, C. M D.: PEREIRA. E. A. Biocombustível: o mito do combustível limpo.<br>"
+" Química Nova na Escola.n. 28, maio 2008 (adaptado).<br>"
+" Considerando a obtenção e o consumo desse biocombustível, há transformação química quando:", "Os poluentes SO<sub>X</sub> , NO<sub>X</sub> e MP são mantidos intactos e dispersos na atmosfera.","A palha de cana-de-açúcar é exposta ao sol para secagem.","A palha da cana e o etanol são usados como fonte de energia.","Os materiais particulados (MP) são espalhados no ar e sofrem deposição seca.","A palha da cana e o etanol são usados como fonte de energia."],

["Considere as seguintes equações termoquímicas: <br> I. 3 O<sub>2(g)</sub> → 2 O<sub>3(g)</sub> &ensp;&ensp;&ensp; ∆H<sub>1</sub> = +284,6 kJ <br>" 
+ "II. 1 C<sub>(grafita)</sub> + 1 O<sub>2(g)</sub>→ 1 CO<sub>2(g)</sub> ∆H<sub>2</sub> = -393,3 kJ <br>"
+ "III. 1 C<sub>2</sub>H<sub>4(g)</sub> + 3 O<sub>2(g)</sub> → 2 CO<sub>2(g)</sub> + 2H<sub>2</sub>O<sub>(l)</sub> ∆H<sub>3</sub> = -1410,8 kJ <br>"
+ "IV. 1 C<sub>3</sub>H<sub>6(g)</sub> + 1 H<sub>2(g)</sub> → 1 C<sub>3</sub>HO<sub>8(g)</sub> ∆H<sub>4</sub> = -123,8 kJ <br>"
+ "V. I<sub>(g)</sub> → 1/2 I<sub>2(g)</sub> ∆H<sub>5</sub> = -104,6 kJ <br>"
+ "Qual é a variação de entalpia que pode ser designada calor de formação ou calor de combustão?","∆H<sub>1</sub>","∆H<sub>2</sub>","∆H<sub>3</sub>","∆H<sub>4</sub>", "∆H<sub>2</sub>"],

["(PUC-MG) Sejam dadas as equações termoquímicas, todas a 25 ºC e 1 atm:<br>"
+ "I- H<sub>2(g)</sub>+ ½ O<sub>2(g)</sub> →H<sub>2</sub>O<sub>(l)</sub> ∆H = -68,3 Kcal/mol <br>"
+ "II- 2Fe<sub>(s)</sub>+ 3/2 O<sub>2(g)</sub>→Fe<sub>2</sub>O<sub>3(s)</sub> ∆H = -196,5 Kcal/mol <br>"
+"III- 2Al<sub>(s)</sub>+ 3/2 O<sub>2(g)</sub>→Al<sub>2</sub>O<sub>3(s)</sub> ∆H = -399,1 Kcal/mol <br>"
+"IV- C<sub>(grafite)</sub>+ O<sub>2(g)</sub>→ CO<sub>2(g)</sub> ∆H = -94,0 Kcal/mol <br>"
+"V- CH<sub>4(g)</sub> + O<sub>2(g)</sub> → CO<sub>2(g)</sub>+ H<sub>2</sub>O<sub>(l)</sub> ∆H = -17,9 Kcal/mol <br>"
+ "Exclusivamente sob o ponto de vista energético, das reações acima, a que você escolheria como fonte de energia é:","I","II","III","IV", "III"],

["Considere a seguinte reação endotérmica (consome calor) em que a energia é indicada como reagente. <br>"
+"	Nessa reação, 1 mol de água líquida recebe calor e decompõe-se em 1 mol de hidrogênio e meio mol de oxigênio: <br>"
+ "H<sub>2</sub>O<sub>(l)</sub> + 285 kJ → H<sub>2(g)</sub> +1/2 O<sub>2(g)</sub> <br>"
+"Qual é a quantidade de calor em cal que a água absorve?","68,18 . 10<sup>3</sup>","68,18","1191,3","1191,3 . 10<sup>3</sup>", "1191,3 . 10<sup>3</sup>"],

["(ENEM_2014) A escolha de uma determinada substância para ser utilizada como"
+" combustível passa pela análise da poluição que ela causa ao ambiente e pela"
+" quantidade de energia liberada em sua combustão completa. O quadro apresenta a"
+" entalpia de combustão de algumas substâncias. As massas molares dos elementos H, C"
+" e O são, respectivamente, iguais a 1 g/mol, 12 g/mol e 16 g/mol.<br> <img src='Imgs/imagensQuestoes/1.png'/> <br>"
+" Levando-se em conta somente o aspecto energético, a substância mais eficiente para a"
+"obtenção de energia, na combustão de 1 kg de combustível, é o", "etano", "etanol", "metanol", "hidrogênio","hidrogênio"],

["(UFRN) Certo fabricante de leite em pó desnatado, quando fornece as características nutricionais do produto,"
+"indica que cada 200 mL de leite, preparado segundo suas instruções, corresponde a 72 kcal. Com base nessa informação"
+"	e nos conhecimentos sobre termoquímica, pode-se concluir:","Em cada 200 mL de leite, 72 mL são de energia.","Em cada 300 mL de leite, 60 mL são de energia.","A absorção do leite, pelo organismo, é uma reação endotérmica.","Cada 100 mL de leite consumido libera 36 kcal.", "Cada 100 mL de leite consumido libera 36 kcal."],

["(PAS-SP) A análise do conteúdo calórico de um sorvete demonstra que ele contém, aproximadamente, 5% de proteínas,"
+"	22% de carboidratos e de 13% de gorduras. A massa restante pode ser considerada como água. A tabela abaixo apresenta"
+"	dados de calor da combustão para esses três nutrientes. Se o valor energético diário recomendável para uma criança é"
+"	de 8400 kJ, o número de sorvetes de 100 g necessários para suprir essa demanda seria de, "
+"aproximadamente: <br><br>"
+"Nutriente(1 grama)-Calor liberado/kj | Proteína-16,7 | Carboidrato-16,7 | Lipídio(gordura)-37,3 <br>","2","3","6","9", "9"],

["Uma reação química fez a temperatura de 10 g de água contidos em um calorímetro variar de 30ºC para 100ºC."
+"	Sabendo que o calor específico da água é igual a 1,0 cal g<sob>-1</sob> ºC<sob>-1</sob>, quantas calorias foram fornecidas por essa reação?","300 cal.","1200 cal.","700 cal.","900 cal.", "700 cal."],

["Qual a variação da temperatura sofrida por 200 g de água que receberam 2 kJ de calor?","0,01 ºC","400 ºC","2,39 ºC","95,7 ºC", "2,39 ºC"],

["(ENEM_2016) O benzeno, um importante solvente para a indústria química, é"
+" obtido industrialmente pela destilação do petróleo. Contudo, também pode ser"
+" sintetizado pela trimerização do acetileno catalisada por ferro metálico sob altas"
+" temperaturas, conforme a equação química: 3C<sub>2</sub>H<sub>2(g)</sub> → C<sub>6</sub>H<sub>6(l)</sub>.<br>"
+"A energia envolvida nesse processo pode ser calculada indiretamente pela variação de"
+" entalpia das reações de combustão das substâncias participantes, nas mesmas"
+" condições experimentais: <br> <img src='Imgs/imagensQuestoes/2.png'/> <br>"
+"A variação de entalpia do processo de trimerização. em kcal, para formação de um mol"
+" de benzeno é mais próxima de:", "-1090","-50","-150","+470","-150"],

["Ao se sair molhado em local aberto, mesmo em dias quentes, sente-se uma sensação de frio."
+" Esse fenômeno está relacionado com a evaporação da água que, no caso, está em contato com o corpo humano."
+"	Essa sensação de frio explica-se corretamente pelo fato de que a evaporação da"
+" água:","é um processo endotérmico e cede calor ao corpo.","é um processo endotérmico e retira calor do corpo.","é um processo exotérmico e cede calor ao corpo.","é um processo exotérmico e retira calor do corpo.", "é um processo endotérmico e retira calor do corpo."],

["(UNESP-SP)Em uma cozinha, estão ocorrendo os seguintes processos: <br>"
+"I. gás queimando em uma das “bocas” do fogão e <br>"
+"II. água fervendo em uma panela que se encontra sobre esta “boca” do fogão.<br>"
+"Com relação a esses processos, pode-se afirmar que:","I e II são exotérmicos."," I é exotérmico e II é endotérmico."," I é endotérmico e II é exotérmico.","I é isotérmico e II é exotérmico.", " I é exotérmico e II é endotérmico."],

["Considere os processos a seguir: <br>"
+"I. Queima do carvão. <br>"
+"II. Fusão do gelo à temperatura de 25°C. <br>"
+"III. Combustão da madeira. <br> ","apenas o segundo é endotérmico.","apenas o segundo é exotérmico.","apenas o primeiro é endotérmico.","apenas o terceiro é exotérmico. ", "apenas o segundo é endotérmico."],

["(Uece) - Observe o esquema de transformação.<br>"
+"               870 k J → 1.000 kJ <br>"
+"      Entalpia inicial → Entalpia final <br>"
+"De acordo com o esquema apresentado, podemos dizer que esse processo deverá"
+"	ser:","endotérmico, com ∆H = + 1.870 kJ.","endotérmico e absorve 130 kJ.","exotérmico e liberar 130 kJ."," exotérmico, com ∆H = - 1.870 kJ.", "endotérmico e absorve 130 kJ."],

["(ENEM_2009) Nas últimas décadas, o efeito estufa tem-se intensificado de maneira"
+" preocupante, sendo esse efeito muitas vezes atribuído à intensa liberação de CO<sub>2</sub>"
+" durante a queima de combustíveis fósseis para geração de energia. O quadro traz as"
+" entalpias-padrão de combustão a 25°C (ΔH° 25) do metano, do butano e do octano. <br>"
+"<img src='Imgs/imagensQuestoes/3.png'/> <br> À medida que aumenta a consciência sobre os impactos ambientais relacionados ao"
+" uso da energia, cresce a importância de se criar políticas de incentivo ao uso de"
+" combustíveis mais eficientes. Nesse sentido, considerando-se que o metano, o butano"
+" e o octano sejam representativos do gás natural, do gás liquefeito de petróleo (GLP) e"
+" da gasolina, respectivamente, então, a partir dos dados fornecidos, é possível concluir"
+" que, do ponto de vista da quantidade de calor obtido por mol de CO<sub>2</sub> gerado, a ordem"
+" crescente desses três combustíveis é:","gasolina, GLP e gás natural.","gás natural, gasolina e GLP.", "gasolina, gás natural e GLP.", "gás natural, GLP e gasolina.", "gasolina, GLP e gás natural."],

["(Mackenzie-SP) - Dizemos que reações de combustão são exotérmicas porque:","absorvem calor. ","liberam oxigênio.","perdem água.","liberam calor. ", "liberam calor. "],

["(Unopar-PR) - Em casas de artigos esportivos é comercializado saco plástico contendo uma mistura de limalha de ferro, "
+"sal, carvão ativado e serragem de madeira úmida, que ao serem ativados produzem calor. Esse produto é utilizado em "
+"acampamento e alpinismo para aquecer as mãos ou fazer compressas quentes numa contusão. O calor obtido provém"
+"de uma reação:","endotérmica.","exotérmica.","adiabática.","dupla troca.", "exotérmica."],

["(MACK SP) - Fe<sub>2</sub>O<sub>3(s)</sub>  +  3C<sub>(s)</sub>  →  2Fe<sub>(s)</sub>  +  3CO<sub>(g)</sub> &ensp;&ensp;&ensp;"
+"ΔH = + 491,5 KJ <br>"
+"Da transformação do óxido de ferro III em ferro metálico, segundo a equação acima, "
+"pode-se afirmar que:","é uma reação endotérmica.","a energia absorvida na transformação de 2 mols de FeO<sub>3(s)</sub> é igual a 491,5 KJ."," é necessário 1 mol de carbono para cada mol de FeO<sub>3(s)</sub> transformado.","é uma reação exotérmica.", "é uma reação endotérmica."],

["(ENEM 2015) O aproveitamento de resíduos florestais vem se tornando cada dia"
+" mais atrativo, pois eles são uma fonte renovável de energia. A figura representa à"
+" queima de um bio-óleo extraído do resíduo de madeira, sendo ΔH<sub>1</sub> a variação de"
+" entalpia devido à queima de 1 g desse bio-óleo, resultando em gás carbônico e água"
+" líquida, e ΔH<sub>2</sub> a variação de entalpia envolvida na conversão de 1 g de água no estado"
+" gasoso para o estado líquido. <br> <img src='Imgs/imagensQuestoes/4.png'/> <br>"
+"A variação de entalpia, em kJ, para a queima de 5 g desse bio-óleo resultando em CO<sub>2</sub>"
+"(gasoso) e H<sub>2</sub>O (gasoso) é:", "-106", "-94,0", "-82,0", "-21,2" ,"-82,0"],

["(UNISANTANA-SP) - No processo exotérmico, o calor é cedida ao meio ambiente, enquanto no processo endotérmico"
+" o calor é absorvido do ambiente. Quando um atleta sofre uma contusão, é necessário resfriar, imediatamente,"
+"	o local com emprego de éter; quando o gelo é exposto à temperatura ambiente, liquefaz-se. A evaporação"
+"	do éter e a fusão do gelo são, respectivamente, processos:","endotérmico e endotérmico."," exotérmico e exotérmico.","endotérmico e exotérmico.","exotérmico e endotérmico.", "endotérmico e endotérmico."],

["(UERJ 2005/1) - O gelo seco, ou dióxido de carbono solidificado, muito utilizado em processos de refrigeração,"
+"	sofre sublimação nas condições ambientes. Durante essa transformação, ocorrem, dentre outros, os fenômenos"
+"	de variação de energia e de rompimento de interações. Esses fenômenos são classificados,"
+"	respectivamente, como: ","exotérmico - interiônico","exotérmico - internuclear ","isotérmico - interatômico","endotérmico - intermolecula", "endotérmico - intermolecula"],

["A variação de entalpia numa reação química pode ser calculada conhecendo-se:","estado inicial do sistema.","o estado final do sistema.","a energia de ativação do sistema.","os estados inicial e final do sistema.", "os estados inicial e final do sistema."],

["Numa reação exotérmica, há [1] de calor, a entalpia final (produtos) é [2] que a entalpia inicial (reagentes) e a variação de"
+"	entalpia é [3] que zero. Completa-se corretamente essa frase substituindo-se [1], [2] e [3],"
+"respectivamente, por:","liberação, maior, maior.","absorção , maior, menor.","liberação, menor, menor. ","liberação, maior, menor. ", "liberação, menor, menor. "],

["(ENEM_2010) No que tange à tecnologia de combustíveis alternativos, muitos"
+" especialistas em energia acreditam que os alcoóis vão crescer em importância em um"
+" futuro próximo. Realmente, alcoóis como metanol e etanol têm encontrado alguns"
+" nichos para uso doméstico como combustíveis há muitas décadas e, recentemente,"
+" vêm obtendo uma aceitação cada vez maior como aditivos, ou mesmo como"
+" substitutos para gasolina em veículos. Algumas das propriedades físicas desses"
+" combustíveis são mostradas no quadro seguinte. <br> <img src='Imgs/imagensQuestoes/5.png'/> <br>" 
+"Considere que, em pequenos volumes, o custo de produção de ambos os alcoóis seja o"
+" mesmo. Dessa forma, do ponto de vista econômico, é mais vantajoso utilizar:", "metanol, pois sua combustão completa fornece aproximadamente 22,7 kJ de energia por litro de combustível queimado.", "etanol, pois sua combustão completa fornece aproximadamente 29,7 kJ de energia por litro de combustível queimado.", "metanol, pois sua combustão completa fornece aproximadamente 17,9 MJ de energia por litro de combustível queimado.", "etanol, pois sua combustão completa fornece aproximadamente 23,5 MJ de energia por litro de combustível queimado.", "etanol, pois sua combustão completa fornece aproximadamente 23,5 MJ de energia por litro de combustível queimado."],

["Considere as seguintes transformações:<br>"
+"I. Dióxido de carbono sólido (gelo seco) dióxido de carbono gasoso. <br>"
+"II. Ferro fundido ferro sólido. <br>"
+"III. Água líquida vapor d’água. <br>"
+"Dessas transformações, no sentido indicado e à temperatura constante, apenas: <br>","I é exotérmica.","II é exotérmica.","I e II são exotérmicas.","II e III são exotérmicas. ", "II é exotérmica."],

["Nos motores de explosão existentes hoje em dia utiliza-se uma mistura de gasolina e etanol. A substituição de parte da gasolina pelo etanol foi possível porque ambos os líquidos: ","reagem exotermicamente com o oxigênio.","são comburentes","possuem densidades diferentes.","fornecem produtos diferentes na combustão.", "reagem exotermicamente com o oxigênio."],

["(ENEM_2017) O ferro é encontrado na natureza na forma de seus minérios, tais"
+"como a hematita (<sup>&alpha;</sup>-Fe<sub>2</sub>O<sub>3</sub> ), a magnetita (Fe<sub>3</sub>O<sub>4</sub> )"
+" e a wustita (FeO). Na siderurgia, o ferro-gusa é obtido pela fusão de minérios de ferro em altos fornos em condições"
+" adequadas. Uma das etapas nesse processo é a formação de monóxido de carbono. O"
+" CO (gasoso) é utilizado para reduzir o FeO (sólido), conforme a equação química: <br> <img src='Imgs/imagensQuestoes/6.png'/>"
+"<br>O valor mais próximo &DeltaH°, em kJ/mol de FeO, para a reação indicada do FeO (sólido) com o CO (gasoso) é:",
"-14", "-17","-50","-64","-17"],

["O calor liberado ou absorvido numa reação química é igual à variação de entalpia dessa reação quando:"," a pressão total dos produtos for igual à dos reagentes.","a reação ocorrer com expansão de volume.","a reação ocorrer com contração de volume.","o volume total dos produtos for igual ao dos reagentes.", " a pressão total dos produtos for igual à dos reagentes."],

["(UFMG-1999) O álcool etílico e o éter dimetílico são isômeros de fórmula molecular C<sub>2</sub>H<sub>6</sub>O. Embora essas duas substâncias tenham a mesma fórmula molecular, os caloresde combustão de seus vapores são diferentes. Todas as afirmativas abaixo apresentam um fator relevante para explicar a diferença dos calores de combustão desses dois compostos, EXCETO:","As suas moléculas apresentam diferentes ligações químicas.","As suas temperaturas de ebulição são diferentes.","As suas fórmulas estruturais são diferentes.","As suas moléculas correspondem a diferentes funções orgânicas.", "As suas temperaturas de ebulição são diferentes."],

["Quando em uma reação química se verifica que, a uma dada temperatura, a entalpia dos produtos é maior que a entalpia dos reagentes, diz-se que a reação é:","exotérmica.","não espontânea.","espontânea.","endotérmica.", "endotérmica."],

["(ENEM_2017) Os combustíveis de origem fóssil, como o petróleo e o gás natural,"
+" geram um sério problema ambiental, devido à liberação de dióxido de carbono"
+" durante o processo de combustão. O quadro apresenta as massas molares e as reações"
+" de combustão não balanceadas de diferentes combustíveis. <br> <img src='Imgs/imagensQuestoes/7.png'/><br> Considerando a combustão completa de 58 g "
+" de cada um dos combustíveis listados no quadro, a substância que emite mais CO<sub>2</sub> é o:", "etano", "butano", "metano", "acetileno", "acetileno"],

["De acordo com a lei de Hess: <br>"
+"I. O sinal da variação de entalpia não depende do sentido da reação química. <br>"
+"II. A variação de entalpia de uma reação depende somente da entalpia inicial dos reagentes. <br>"
+"III. Uma equação termoquímica pode ser expressa pela soma das etapas intermediárias da reação. <br>"
+"Está(ão) correta(s):","Apenas I.","Apenas II.","Apenas III.","Todas estão corretas.", "Apenas III."],

["Calcule a energia da ligação C = O, sabendo que o CO<sub>2</sub> tem 500 cal.","500 kcal.","300 kcal.","250 kcal.","700 kcal.", "250 kcal."],

["A variação de energia térmica de uma reação, quando reagentes e produtos são comparados sobmesma pressão, recebe o nome de:","entalpia.","entropia.","energia livre.","energia de ativação.", "entalpia."],

["(ENEM_2011) Um dos problemas dos combustíveis que contêm carbono é que sua"
+" queima produz dióxido de carbono. Portanto, uma característica importante, ao se"
+" escolher um combustível, é analisar seu calor de combustão (&Delta;H<sub>c</sub><sup>o</sup>) , definido como a"
+" energia liberada na queima completa de um mol de combustível no estado padrão. O"
+" quadro seguinte relaciona algumas substâncias que contêm carbono e seu (&Delta;H<sub>c</sub><sup>o</sup>).<br>"
+"<img src='Imgs/imagensQuestoes/8.png'/> <br> Neste contexto, qual dos combustíveis, quando queimado completamente, libera mais"
+" dióxido de carbono no ambiente pela mesma quantidade de energia produzida?", "metano", "etanol", "glicose", "octano","glicose"],

["Qual será o calor absorvido na reação a seguir quando a quantidade de carbono for igual a 36 g? <br>"
+"<center>SnO<sub>2(g)</sub>  +  2 C<sub>(grafite)</sub>  →  Sn<sub>(s)</sub>  +  2 CO<sub>(g)</sub> &ensp;&ensp; ΔH = 360 kJ <center><br>","360 kJ.","540 kJ.","480 kJ.","750 kJ.", "540 kJ."],

["Determine a capacidade térmica de um corpo que recebeu 2000 calorias de calor de uma fonte térmica e sofreu uma variação de temperatura de 40 °C.","50 cal/°C","40 cal/°C","30 cal/°C","20 cal/°C", "50 cal/°C"],

["(ENEM_2010) O abastecimento de nossas necessidades energéticas futuras"
+" dependerá certamente do desenvolvimento de tecnologias para aproveitar a energia"
+" solar com maior eficiência. A energia solar é a maior fonte de energia mundial. Num"
+" dia ensolarado, por exemplo, aproximadamente 1 kJ de energia solar atinge cada"
+" metro quadrado da superfície terrestre por segundo. No entanto, o aproveitamento"
+" dessa energia é difícil porque ela é diluída (distribuída por uma área muito extensa) e"
+" oscila com o horário e as condições climáticas. O uso efetivo da energia solar depende"
+" de formas de estocar a energia coletada para uso posterior."
+"<br> BROWN, T. Química e Ciência Central. São Paulo: Pearson Prentice Hall, 2005. <br>"
+"Atualmente, uma das formas de se utilizar a energia solar tem sido armazená-la por"
+" meio de processos químicos endotérmicos que mais tarde podem ser revertidos para"
+" liberar calor. Considerando a reação: <br> <img src='Imgs/imagensQuestoes/9.png'/ width='110%'> <br>"
+"e analisando-a como potencial mecanismo para o aproveitamento posterior da energia solar, conclui-se que se trata de uma estratégia",
"satisfatória, uma vez que a reação direta ocorre com liberação de calor havendo"
+" ainda a formação das substâncias combustíveis que poderão ser utilizadas"
+" posteriormente para obtenção de energia e realização de trabalho útil.",
"insatisfatória, uma vez que há formação de gases poluentes e com potencial poder"
+" explosivo, tornando-a uma reação perigosa e de difícil controle.",
"insatisfatória, uma vez que há formação de gás CO que não possui conteúdo"
+" energético passível de ser aproveitado posteriormente e é considerado um gás"
+" poluente.",
"satisfatória, uma vez que a reação direta ocorre com absorção de calor e promove"
+" a formação das substâncias combustíveis que poderão ser utilizadas posteriormente"
+" para obtenção de energia e realização de trabalho útil."],

["Veja a entalpia-padrão de formação, em KJ.mol<sup>-1</sup> e a 25°C, de algumas substâncias: <br><br>"
+"CH<sub>4(g)</sub> = -74,8; &ensp;" 
+"CHCl<sub>3(l)</sub> = -134,5; &ensp;" 
+"HCl<sub>(g)</sub> = -92,3 <br><br>"
+"Se realizarmos a reação de cloração do metano, qual será o valor da variação da entalpia do processo? <br>"
+"<center style='font-size:15pt;'>CH<sub>4(g)</sub> + 3Cl<sub>2(g)</sub> → CHCl<sub>3(l)</sub> + 3HCl<sub>(g)</sub></center> <br>","-115,9 KJ.mol<sup>-1</sup>","186,3 KJ.mol<sup>-1</sup>","-376,2 KJ.mol<sup>-1</sup>","-336,6 KJ.mol<sup>-1</sup>", "-336,6 KJ.mol<sup>-1</sup>"],

["(UFRGS-RS) Sabendo-se que o calor-padrão de formação da água líquida a 25°C é, aproximadamente, – 188 kJ/mol, o valor da variação de entalpia, em kJ, na formação de uma massa igual a 9g de águalíquida a 25°C e 1 atm é:","– 376.","– 188.","– 94.","+ 94.", "– 94."],

["(Vunesp-SP) Considere a equação a seguir: <br><br>"
+"            2 H<sub>2(g)</sub>+ O<sub>2(g)</sub>->2 H<sub>2</sub>O<sub>(l)</sub> ∆H = – 572 kJ <br><br>"
+"	É correto afirmar que a reação é:","exotérmica, liberando 286 kJ por mol de oxigênio consumido.","exotérmica, liberando 572 kJ para dois mols de água produzida.","endotérmica, consumindo 572 kJ para dois mols de água produzida.","endotérmica, liberando 572 kJ para dois mols de oxigênio consumido.", "exotérmica, liberando 572 kJ para dois mols de água produzida."],

["1000 calorias correspondem a quanto, respectivamente, em quilocalorias, joules e quilojoules:","1000 . 103; 4,18 e 4,18 . 103.","1; 418 e 4,18.","1; 4180 e 4,18","4,18; 418 e 1", "1; 4180 e 4,18"],

["(Uespi-PI) - Observe o gráfico abaixo: <br> <img src='Imgs/imagensQuestoes/10.png'/> <br>"
+"1. O gráfico corresponde a um processo endotérmico. <br>"
+"2. A entalpia da reação é igual a + 226 kcal.<br>"
+"3. A energia de ativação da reação é igual a 560 kcal.<br> Está(ão) correta(s):","1 apenas","2 apenas","2 e 3 apenas","1, 2 e 3", "1, 2 e 3"],

["(UFRRJ) Desde a pré-história, quando aprendeu a manipular o "
+"fogo para cozinhar seus alimentos e se aquecer, o homem vem "
+"percebendo sua dependência cada vez maior das várias formas de "
+"energia. A energia é importante para uso industrial e doméstico, nos "
+"transportes, etc. Existem reações químicas que ocorrem com "
+"liberação ou absorção de energia, sob a forma de calor, "
+"denominadas, respectivamente, como exotérmicas e endotérmicas. "
+"Observe o gráfico a seguir e assinale a alternativa correta: <br> <img src='Imgs/imagensQuestoes/11.png'/>","O gráfico representa uma reação endotérmica","A entalpia dos reagentes é igual à dos produtos","O gráfico representa uma reação exotérmica","A entalpia dos produtos é maior que a dos reagentes","O gráfico representa uma reação exotérmica"],

["Nas pizzarias há cartazes dizendo “Forno a lenha”.<br>"
+"	A reação que ocorre neste forno para assar a pizza é:","explosiva.","exotérmica.","hidroscópica.","endotérmica.", "exotérmica."],

["Éter é normalmente usado para aliviar dores provocadas por "
+"contusões sofridas por atletas, devido ao rápido resfriamento "
+"provocado, por esse líquido, sobre o local atingido. Esse resfriamento "
+"ocorre por que: ", "o éter é um liquido gelado.","o éter, ao tocar a pele, sofre evaporação, e este um processo endotérmico.",
"o éter reage endotermicamente com substâncias da pele.",
"o éter, se sublima em contato com a pele, sofre evaporação, e este é um processo exotérmico.",
"o éter, ao tocar a pele, sofre evaporação, e este um processo endotérmico."],

["Em um laboratório de Física, uma amostra de 20 g de cobre "
+"recebeu 186 cal de calor de uma determinada fonte térmica. Sabendo "
+"que o calor específico do cobre é 0,093 cal/g°C, determine a variação "
+"de temperatura sofrida pela amostra.","50 °C","100°C","105°C","200°C" ,"100°C"],

["(Fatec-SP) Considere as afirmações a seguir, segundo a lei de Hess: <br>"
+"I) O calor de reação (∆H) depende apenas dos estados inicial e final do processo.<br>"
+"II) As equações termoquímicas podem ser somadas como se fossem equações matemáticas.<br>"
+"III) Podemos inverter uma equação termoquímica desde que inverta o sinal de ∆H.<br>"
+"IV) Se o estado final do processo for alcançado por vários caminhos, o valor de ∆H dependerá dos estados intermediários através dosquais o sistema pode passar.<br> Conclui-se que:",
"as afirmações I e II são verdadeiras.", "as afirmações II e III são verdadeiras.", "as afirmações I, II, III são verdadeiras.", " todas são verdadeiras.", " todas são verdadeiras."],

[" (Fuvest-SP) A entalpia de combustão da grafite a gás carbônico é "
+"–94 kcal/mol. A do monóxido de carbono gasoso a gás carbônico é – "
+"68 kcal/mol. Desses dados, pode-se concluir que a entalpia de "
+"combustão da grafite a monóxido de carbono gasoso, expressa em "
+"kcal/mol vale:","+13","+26","–13","–26","–26"],

["(Unitau-SP) Sejam as seguintes afirmações, que representam consequências importantes da lei de Hess: <br>"
+"I) Invertendo-se uma equação termoquímica, o calor ou a entalpia de reação permanecerá inalterado. <br>"
+"II) Multiplicando-se ou dividindo-se uma equação termoquímica, o calor da reação permanece inalterado.<br>"
+"III) Podemos somar algebricamente equações termoquímicas.", "Nenhuma é correta","Somente I é correta","Somente II é correta","Somente III é correta","Somente III é correta"],

["Ferro metálico pode ser obtido pelo processo de Aluminotermia, "
+"que consiste em aquecer óxido férrico em presença de alumínio "
+"metálico. Sabendo-se que: <br> <img src='Imgs/imagensQuestoes/12.png'/> "
+"<br> O efeito térmico da reação de 1 mol de óxido férrico com alumínio metálico, em kJ, será de:", "+ 836", "+ 1672", "– 2508", " – 836",  "– 836"],

["(UFOP) Quando Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub>.3H<sub>2</sub>O se dissolve em água, a solução fica fria. Assinalar o diagrama de entalpia que melhor descreve o"
+" comportamento dessa dissolução.", "<img src='Imgs/imagensQuestoes/1.png'/>", "<img src='Imgs/imagensQuestoes/2.png'/>","<img src='Imgs/imagensQuestoes/3.png'/>","<img src='Imgs/imagensQuestoes/4.png'/>","<img src='Imgs/imagensQuestoes/4.png'/>"],

["(UFMG) Solicitado a classificar determinados processos como exotérmicos ou endotérmicos, um estudante apresentou este quadro:"
+"<br><img src='Imgs/imagensQuestoes/13.png'/><br>Considerando-se esse quadro, o número de erros cometidos pelo estudante em sua classificação é:","1","3","0","2","2"],

[" (UFMG) A dissolução de cloreto de sódio sólido em água foi"
+" experimentalmente investigada, utilizando-se dois tubos de ensaio,"
+" um contendo cloreto de sódio sólido e o outro, água pura, ambos à"
+" temperatura ambiente. A água foi transferida para o tubo que"
+" continha o cloreto de sódio. Logo após a mistura, a temperatura da"
+" solução formada decresceu pouco a pouco. Considerando-se essas"
+" informações, é CORRETO afirmar que", 
"a entalpia da solução é maior que a entalpia do sal e da água separados.",
"o resfriamento do sistema é causado pela transferência de calor da água para o cloreto de sódio.",
"o resfriamento do sistema é causado pela transferência de calor do cloreto de sódio para a água.",
"o sistema libera calor para o ambiente durante a dissolução.",
"a entalpia da solução é maior que a entalpia do sal e da água separados."]];
	dicas = [ 0,
"<h2>Ficando por dentro de alguns termos usados com frequência em Termoquímica</h2> <br>" 
+"<strong>1. Sistema:</strong> Denomina-se sistema uma parte do universo físico cujas propriedades estão sob investigação;<br>"
+"<strong>2. Fronteira:</strong> Limites que definem o espaço do sistema, separando-o do resto do universo;<br>"
+"<strong>3. Vizinhança</strong> ou meio ambiente: É a porção do universo próxima às fronteiras do sistema, que pode na maioria dos casos, interagir com o sistema;<br>"
+"4. Quando uma reação química ocorre em um determinado sistema, isso acarreta <strong>uma troca de calor entre o sistema em reação e o meio ambiente.</strong><br>"
+"<img src='Imgs/imgDicas/Dica1.png'/>'"
+"<b>https://www.portalsaofrancisco.com.br/quimica/termoquimica acessado em 30/03/2019.</b>",

"<strong>CALOR -</strong> diz respeito à transferência de energia como resultado de uma diferença de temperatura entre o sistema e suas vizinhanças.<br>"
+ "<strong> TEMPERATURA -</strong> indica a direção do fluxo de energia térmica ou, do ponto de vista microscópico, o grau de agitação térmica (velocidades de translação, de vibração e de rotação) das partículas (átomos, moléculas ou íons) que constituem o corpo. A quantidade de calor, por sua vez, depende da própria temperatura e da massa total do sistema. Para medir, experimentalmente, a <strong>quantidade de calor (Q)</strong> de uma determinada substância utilizamos os dados obtidos em um calorímetro (ver figura a seguir) e usamos a fórmula: <br><br>"
+"<img src='Imgs/imgDicas/Dica2part1.png'/><br><br>"
+"<strong>Obs:</strong> A água é utilizada como substância padrão, no cálculo da quantidade de calor envolvido no processo, que pode ser positiva (endotérmica) ou negativa (exotérmica).<br><br>"
+"<img src='Imgs/imgDicas/Dica2part2.png'/><br>",

"<h2>Um banho fervendo é muito bom, já um diaquente nem tanto. Por quê?</h2> <br>"
+"O calor pode ser transferido ou propagado de diferentes maneiras, como: condução, convecção, irradiação térmica e mudançade fases. A condução ocorre quando há contato físico com uma substância: aqui a substância é a água. Convecção acontece quando o ar soprando no seu corpo resulta em transferência de calor. Um exemplo de irradiação ou radiação térmica é o calor que sentimos do Sol. A mudança de fase que sentimos nesta situação é a evaporação da água, que retira calor do corpo. <strong> Quando você está tomando banho quente, além de sentir o calor da água quente no seu corpo, você também sente o resfriamento causado pela água ao evaporar, roubando calor do seu corpo no processo. </strong> Então o calor está sendo transferido da água para o seu corpo por condução e transferido novamente para a água quando ela evapora. Efetivamente você está sendo esquentado e resfriado ao mesmo tempo.<br><br>"
+"<b>https://rachacuca.com.br/curiosidades/14/um-banho-fervendo-e-muito-bom-ja-um-dia-quente-nem-tanto-por-que/ acessado em 30/03/2019.<br>",

"<strong>Caloria -</strong> É uma unidade de medida de energia. Na Física, é a quantidade de energia necessária para elevar em 1 grau Celsius a temperatura de 1g de água (1mL). Segundo o sistema internacional de unidades, 1 caloria (cal) equivale a 4,18 joules.<br>"
+"<strong>Caloria</strong> pode ser conceituada, também, como a quantidade deenergia que um alimento nos fornece.<br>"
+"<strong>Entalpia (H) -</strong> é conteúdo de calor ou conteúdo de energia de uma determinada substância.<br>"
+"A <strong>Termoquímica</strong> estuda as trocas de calor associadas às reações químicas ou a mudanças no estado de agregação das substâncias.",

"Os principais alimentos energéticos são:<br>"
+"<strong>I -</strong>  gordura;<br>"
+"<strong>II -</strong> álcool;<br>"
+"<strong>III -</strong> carboidrato e proteína.<br>"
+"O excesso desses alimentos não pode ser eliminado pelo organismo. Esse excesso acaba ficando armazenado em forma de gordura.",

"Para se calcular quantidade de energia de um alimento, é só pegar a:<br>"
+"<strong>I -</strong> a quantidade de carboidratos x 4;<br>"
+"<strong>II -</strong> a quantidade de proteínas x 4;<br>"
+"<strong>III -</strong> a quantidade de lipídeos x 9;<br>"
+"<strong>IV -</strong> a quantidade de álcool x 7;<br>"
+"Somando-se tudo (<strong>I + II + III + IV</strong>), obtém o VET (valor energético total) que é a quantidade total de quilocalorias (Kcal) ou valor energético do alimento.",

"<h2>Por que um alimento é mais calórico que outro?</h2> <br>"
+"Os alimentos contêm valores energéticos.<br>"
+"Veja na tabela a seguir alguns valores energéticos. São geralmente encontrados em calorias (cal) ou em quilocalorias (Kcal).<br>"
+"<img src='Imgs/imgDicas/Dica3.png'/><br>"
+"Esses 'valores energéticos' correspondem à energia liberada nas reações químicas do metabolismo desses alimentos no organismo.<br>"
+"Se dizemos que o chocolate tem muita caloria, na verdade queremos dizer que nas reações do metabolismo do chocolate no organismo, há liberação de muita energia.<br>"
+"<b>https://www.soq.com.br/curiosidades/ acessado em 30/03/2019.</b>",

"Qualquer tipo de atividade física gasta calorias, mas os exercícios físicos são uma forma mais eficaz de se obter um maior gasto calórico.<br>"
+"O gasto calórico dos exercícios também varia para cada indivíduo, pois dependerá do metabolismo, da genética, do biótipo e grau de habilidade motora.",

"⦁	Para calcularmos quanto energia um alimento pode fornecer quando é digerido, devemos saber a sua composição em massa de: proteínas, carboidratos e lipídeos; para podermos determinar o seu valor energético. <br><br>"
+"<img src='Imgs/imgDicas/Dica4.png'/><br><br>"
+"Para essa quantidade de alimento o seu valor energético será de <strong>720,9 KJ.</strong> Para uma quantidade maior de energia será necessário uma quantidade maior do alimento.",

"<strong>Variação de Entalpia (&Delta;H) ou Calor de Reação</strong> é o nome dado a medida da quantidade de calor liberada ou absorvida numa reação química, a pressão constante. Podem ser expressos em caloria (<strong>cal</strong>) ou Joule (<strong>J</strong>).<br>"
+"Podemos utilizar a seguinte fórmula para calcularmos o &Delta;H:<br>"
+"<img src='Imgs/imgDicas/Dica5part1.png'/><br>"
+"<strong>Reações exotérmicas</strong> apresentam variação de entalpia negativa (<strong>&Delta;H < 0</strong>) enquanto que <strong>reações endotérmicas</strong> apresentam variação de entalpia positiva (<strong>&Delta;H > 0</strong>).<br>"
+"<img src='Imgs/imgDicas/Dica5part2.png'/><br>"
+"A quantidade de matéria, o estado físico, a variedade alotrópica, a dissolução/ diluição e a temperatura influenciam na variação de entalpia de uma reação química.",

"<img src='Imgs/imgDicas/Dica6.png'/>",

"A &Delta;H positiva indica que o fluxo de energia ocorre da vizinhança (meio ambiente). para o sistema (reação) e o &Delta;H negativo indica que o fluxo de energia ocorre sistema (reação) para a vizinhança (meio ambiente).<br>"
+"<strong>Calor</strong> (ou <strong>entalpia</strong>) <strong>de combustão</strong> de uma substância é a variação de entalpia (quantidade de calor liberada) verificada na <strong>combustão total de 1 mol</strong> de uma determinada substância, supondo-se no estado padrão (T = 25 ºC e p = cte = 1 atm) todas as substâncias envolvidas nessa combustão.<br><br>"
+"<img src='Imgs/imgDicas/Dica7.png'/><br><br>"
+"Vários fatores são relevantes para explicar as diferenças dos calores de combustão dos compostos orgânicos entre eles estão: as forças intermoleculares, as massas molares, a geometria dos compostos, o tipo de função química, os diferentes tipos de ligações químicas existentes na molécula desse composto, os estados físicos, as formas alotrópicas.",

"<h2>Motores a combustão como funcionam?</h2> <br>"
+"Para o motor de um carro funcionar bem, é necessário que uma mistura de gasolina e ar seja borrifada no seu interior. No interior do carro, a mistura recebe uma faísca elétrica (ignição) e explode, formando gases. Esses gases aumentam a pressão dentro do cilindro de combustão, provocando a movimentação de um êmbolo, que faz o motor funcionar. É a intensidade da energia liberada durante a explosão que faz com que o carro se movimente. Dependendo da mistura, a gasolina, ao ser comprimida, pode explodir antes da hora, diminuindo a intensidade da explosão.<br><br>"
+"<b>https://www.soq.com.br/curiosidades/ acessado em 30/03/2019.</b>",

"Toda substância simples no estado padrão apresenta entalpia (H) = 0.<br>"
+"O conteúdo energético (H) de uma substância composta é igual à soma das energias de todas as suas ligações.<br>"
+"Todas as reações químicas de combustão são processos onde ocorre liberação de energia (&Delta;H &lt; 0).<br>"
+"Todo processo de quebra de ligação (ou de forças intermoleculares) são endotérmicos; enquanto que os processos de formação de ligação (ou de forças intermoleculares) são exotérmicos.",

"<strong>Reações exotérmicas</strong> são aquelas que <strong>liberam calor</strong> e possuem a entalpia dos reagentes maior que a entalpia dos produtos, <strong>Hr > Hp</strong>, e, consequentemente, apresentam <strong>&Delta;H < 0</strong>. Podemos representá-las graficamente da seguinte forma:<br>"
+"<img src='Imgs/imgDicas/Dica8.png'/>",

"<h2>Octanagem da gasolina o que significa?</h2><br>"
+"Uma gasolina de boa qualidade se ela tiver alta resistência à compressão, sem explosão prematura. Cientistas usam dois hidrocarbonetos como padrão para medir a qualidade a gasolina. Ao heptano, que apresenta baixíssima resitência à compressão, dá-se o valor 0 (zero) e ao 2,2,4-trimetil-pentano, o isoctano, que apresenta elevada resistência à compressão, o valor 100 (cem). Então, uma gasolina com octanagem 90 é aquela que se comporta como se fosse constituída de uma mistura de 10% de heptano com 90% de isoctano.<br><br>"
+"<b>https://www.soq.com.br/curiosidades/ acessado em 30/03/2019.</b>",

"<strong>Reações endotérmicas</strong> são aquelas que <strong>absorvem calor</strong> e possuem a entalpia dos reagentes menor que a entalpia dos produtos, <strong>Hr < Hp</strong>, e, consequentemente, apresentam <strong>&Delta;H > 0</strong>. Podemos representá-las graficamente da seguinte forma:<br><br>"
+"<img src='Imgs/imgDicas/Dica9.png'/>",

"Numa reação, por convenção, quando representadas através uma equação química, às substâncias que estão do lado esquerdo da seta são os reagentes, e as que estão no lado direito são os produtos.<br><br>"
+"<img src='Imgs/imgDicas/Dica10.png'/>",

"<h2>Lei de Hess</h2><br>"
+"A variação de entalpia envolvida numa reação química, sob certas condições experimentais, depende exclusivamente da entalpia inicial dos reagentes e da entalpia final dos produtos, seja a reação executada numa <strong>única etapa (I)</strong>, seja em <strong>várias etapas sucessivas (II).</strong><br><br>"
+"<img src='Imgs/imgDicas/Dica11part1.png'/><br><br>"
+"Então o <strong>CO2(<sub>g</sub>)<strong> pode ser obtido em <strong>uma etapa</strong> (primeiro caminho) ou em <strong>etapas sucessivas</strong> (segundo caminho) e independentemente do número de etapas o valor da entalpia é a mesma, vejamos os exemplos:<br><br>	"
+"<img src='Imgs/imgDicas/Dica11part2.png'/>",

"<h2>Consequências da Lei de Hess:</h2><br>"
+"<strong>I -</strong> Ao inverter uma reação termoquímica reversível, deve-se trocar o sinal do ΔH, pois, se em determinado sentido a reação libera calor (exotérmica), em sentido contrário, a reação terá de absorver a mesma quantidade de calor que havia liberado (endotérmica), e vice-versa.<br><br>"
+"<img src='Imgs/imgDicas/Dica12part1.png'/><br><br>"
+"<strong>II -</strong> Multiplicando (ou dividindo) uma equação termoquímica por um número diferente de zero, o valor de &Delta;H será também multiplicado (ou dividido) por esse número.<br><br>"
+"<img src='Imgs/imgDicas/Dica12part2.png'/><br><br>"
+"<strong>III -</strog> As equações termoquímicas podem ser somadas como se fossem equações matemáticas.<br><br>"
+"<img src='Imgs/imgDicas/Dica12part3.png'/>",

"<h2>Como acontece a combustão espontânea?</h2><br>"
+"Os materiais armazenados em grandes quantidades podem sofrer uma combustão espontânea. Isto acontece devido ao calor interno causado por oxidação (reação onde elétrons são perdidos, principalmente quando o oxigênio se combina com algum outro elemento químico, ou quando o hidrogênio é retirado de um composto). Essa oxidação não permite que o calor seja liberado para o ar ao redor, a temperatura do material vai aumentando até que ele atinge seu ponto de ignição e provoca chamas. Por volta de 290 a.C., um texto chinês registra esse fenômeno descrevendo a combustão espontânea de um tecido armazenado embebido em óleo.<br><br>"
+"<b>https://www.soq.com.br/curiosidades/ acessado em 30/03/2019.</b>"];
	saco_exercicio = [ 0,
	"&ensp; &ensp; &ensp; Você irá jogar basquete; convide um jogador para jogar com você! Clique no dado para ver quantos minutos vocês jogaram e quantas calorias o jogador convidado perdeu. (12 Kcal/min)",
	"&ensp; &ensp; &ensp; Você participará de uma maratona no centro do recife, convide um jogador para correr a maratona com você! Clique no dado para ver quantos minutos vocês correram e quantas calorias o jogador convidado perdeu. (7,5 Kcal/min)",
	"&ensp; &ensp; &ensp; Você irá participar de uma partida de futebol profissional na Arena Pernambuco, convide um jogador para jogar esta partida de futebol com você! Clique no dado para ver quantos minutos vocês jogaram futebol e quantas calorias o jogador convidado perdeu. (5 Kcal/min)",
	"&ensp; &ensp; &ensp; Você participará de uma aula de dança, convide um jogador para participar da aula de dança com você! Clique no dado para ver quantos minutos durou a aula de dança e quantas calorias o jogador convidado perdeu.(4,2 Kcal/min)",
	"&ensp; &ensp; &ensp; Você jogará um set de uma partida de vôlei no Geraldão, convide um jogador para jogar com você! Clique no dado para ver quantos minutos durou esse set da partida que jogaram; devem estar cansados? Então veja quantas calorias o jogador convidado perdeu. (5,5 Kcal/min)",
	"&ensp; &ensp; &ensp; Você está no parque da Jaqueira para caminhar, convide um jogador para caminhar com você! Clique no dado para ver quantos minutos vocês caminharam e quantas calorias o jogador convidado perdeu. (4,3 - Kcal/min)",
	"&ensp; &ensp; &ensp; Você foi convidado para jogar futsal na quadra da ETEMB, convide um jogador para jogar futsal com você! Clique no dado para ver quantos minutos vocês jogaram e quantas calorias o jogador convidado perdeu. (6 Kcal/min)",
	"&ensp; &ensp; &ensp; Você participará do torneio de natação Maria Lenk, no Clube Português, convide um jogador para nadar com você! Clique no dado para ver quantos minutos vocês nadaram e quantas calorias o jogador convidado perdeu.",
	"&ensp; &ensp; &ensp; Você entrou no octógono para participar de uma luta de artes marciais mistas, convide um jogador para lutar com você! Clique no dado para ver quantos minutos vocês lutaram e quantas calorias o jogador convidado perdeu.(4,7 Kcal/min)",
	"&ensp; &ensp; &ensp; Você participará de uma partida de handebol emocionante, pela seleção brasileira, convide um jogador para participar com você dessa partida! Clique no dado para ver quantos minutos à partida de handebol durou e quantas calorias o jogador convidado perdeu. (10 Kcal/min)",
	"&ensp; &ensp; &ensp; Você está participará do campeonato mundial de atletismo na Amazônia, convide um jogador para participar desse campeonato de atletismo com você! Clique no dado para ver quantos minutos durou a participação de vocês e quantas calorias o jogador convidado perdeu. (6,1 Kcal/min)"];
	quitanda =  [[["frango",1],["queijo", 3.13],["ovo",1.95],["boi",2.4],["leite",0.62],["iogurte",0.45],["peru", 0.93],[0,0],[0,0],[0,0]], 
				[["pao",2.7],["arroz",1.64],["macarrao",1.5],["feijao",1],["cereal",4.2],["batata",1.4],["milho",1.3],["lasanha", 1.3],["mandioca",3.5],["torrada",4]],
				[["manteiga",7.7],["margarina",7.4],["castanha",6.5],["maionese",6.8],["azeite",9],["amedoin",5.8],["gvh",9],[0,0],[0,0],[0,0]]];

/*Position: Down, Left, Right (Above PIECES) and Up, Left, Right (Under PIECES) */

	posGreen = [[96,118]];
	posRed = [[402, 119]];
	posYellow = [[97, 346]];
	posBlue = [[401, 345]];
	
/*Base's Position - '1' is the Green's begin - '15' is the Red's begin - '29' is the blue's begin - '43' is the yellow begin */

	posicao = [ 
	0,
	[44, 200],
	[78, 200],
	[113, 200],
	[147, 200],
	[181, 200],
	[215, 200],
	[215, 168],
	[215, 136],
	[215, 104],
	[215, 72],               
	[215, 40],
	[215, 8],
	[249, 8],
	[283, 8],
	[283, 39],
	[283, 71],
	[283, 103],
	[283, 135],
	[283, 167],
	[283, 199],
	[317, 199],
	[351, 199],
	[385, 199],
	[419, 199],
	[453, 199],
	[487, 199],
	[487, 231],
	[487, 263],
	[453, 263],
	[419, 263],
	[385, 263],
	[351, 263],
	[317, 263],
	[283, 263],
	[283, 295],
	[283, 327],
	[283, 359],
	[283, 391],
	[283, 423],
	[283, 455],
	[249, 455],
	[215, 455],
	[215, 423],
	[215, 391],
	[215,359],
	[215,327],
	[215,295],
	[215,263],
	[181,263],
	[147,263],
	[113,263],
	[79,263],
	[45,263],
	[11,263],
	[11,231],
	[11,199]];
	
/*Goal's position*/

goalPositionGreen = [0,[45,231],[79,231],[113,231],[146,231],[180,231],[214,231]];
goalPositionRed = [0,[249,39],[249,71],[249,103],[249,135],[249,167],[249,199]];
goalPositionBlue = [0,[453,231],[419,231],[385,231],[351,231],[317,231],[283,231]];
goalPositionYellow = [0,[249,423],[249,391],[249,359],[249,327],[249,295],[249,263]];

/*Função do objeto e instância do objeto*/

function Jogador(nome, id, cor, calorias, posX1, posY1, dado) {
    this.nome = nome;
    this.id = id;
    this.cor=cor;
	this.calorias=calorias;
    this.posX1=posX1;
    this.posY1=posY1;
	this.dado = dado;
}
	
	var one = new Jogador("Jogador 1", 1, "green", 100, posicao[56][0], posicao[56][1]);
	var two = new Jogador("Jogador 2", 2, "red", 100, posicao[14][0], posicao[14][1]);
	var three = new Jogador("Jogador 3", 3, "yellow", 100, posicao[42][0], posicao[42][1]);
	var four = new Jogador("Jogador 4", 4, "blue", 100, posicao[28][0], posicao[28][1]);

/*Específicas funções*/

//Reiniciar Game
function restartGame(){
	document.location.reload(true);
}
//fechar fique dentro
function fdExit(){
	document.getElementById("fique_dentro").style.visibility = "hidden";
	document.getElementById("AudClick").play();
}

//Função thermo10
function thermoAbrir(){
	document.getElementById("thermo").style.visibility = "visible";
	document.getElementById("AudClick").play();
}
function thermoFechar(){
	document.getElementById("thermo").style.visibility = "hidden";
	document.getElementById("AudClick").play();
}

//Fução virar tela
function Virar(id){
	if ((id== 1 || id==2) && (celular==true)) {
	document.getElementsByClassName("Rotation")[1].style.transform = "rotate(180deg)";	
	document.getElementsByClassName("Rotation")[2].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[3].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[4].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[5].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[6].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[7].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[8].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[9].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[10].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[11].style.transform = "rotate(180deg)";	
	document.getElementsByClassName("Rotation")[12].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[13].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[14].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[15].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[16].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[17].style.transform = "rotate(180deg)";
	document.getElementsByClassName("Rotation")[18].style.transform = "rotate(180deg)";
	}
	
	}
//Função para desvirar tela
function Desvirar(id){
	if ((id== 3 || id==4) && (celular==true)) {
	document.getElementsByClassName("Rotation")[1].style.transform = "rotate(360deg)";	
	document.getElementsByClassName("Rotation")[2].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[3].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[4].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[5].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[6].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[7].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[8].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[9].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[10].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[11].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[12].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[13].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[14].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[15].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[16].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[17].style.transform = "rotate(360deg)";
	document.getElementsByClassName("Rotation")[18].style.transform = "rotate(360deg)";
	}	
}
//Função verificar peão seguro
function seguros(id){
	switch(id){
		case 1:
			if((one.posX1 == 215 && one.posY1 == 40) || (one.posX1 == 453 && one.posY1 == 199 ) || (one.posX1 == 283 && one.posY1 == 423 ) || (one.posX1 == 45 && one.posY1 == 263 )){
				return true;
			}
			else{
				return false;
			}
		break;
		case 2:
			if((two.posX1 == 215 && two.posY1 == 40) || (two.posX1 == 453 && two.posY1 == 199 ) || (two.posX1 == 283 && two.posY1 == 423 ) || (two.posX1 == 45 && two.posY1 == 263 )){
				return true;
			}else{
				return false;
			}
		break
		case 3:
			if((three.posX1 == 215 && three.posY1 == 40) || (three.posX1 == 453 && three.posY1 == 199 ) || (three.posX1 == 283 && three.posY1 == 423 ) || (three.posX1 == 45 && three.posY1 == 263 )){
				return true;
			}else{
				return false;
			}
		break;
		case 4:
			if((four.posX1 == 215 && four.posY1 == 40) || (four.posX1 == 453 && four.posY1 == 199 ) || (four.posX1 == 283 && four.posY1 == 423 ) || (four.posX1 == 45 && four.posY1 == 263 )){
				return true;
			}else{
				return false;
			}
}}

// Função da pontuação por cada casa percorrida
function Pt(Id, Dado) {

	switch (Id) {
			case 1:
				one.calorias = one.calorias + (20 * Dado);
				document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
				break;
			case 2:
				two.calorias = two.calorias + (20 * Dado);
				document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
				break;
			case 3:
				three.calorias = three.calorias + (20 * Dado);
				document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
				break;
			case 4:
				four.calorias = four.calorias + (20 * Dado);
				document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
				break;
			default:
				alert("Erro!");
				break;
			}
	
}

// Função da pontuação pela entrada do pino no tabuleiro
function PtSaida(Id) {

	switch (Id) {
		case 1:
			one.calorias = one.calorias + 200;
			document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
			break;
		case 2:
			two.calorias = two.calorias + 200;
			document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
			break;
		case 3:
			three.calorias = three.calorias + 200;
			document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
			break;
		case 4:
			four.calorias = four.calorias + 200;
			document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
			break;
		default:
			alert("Erro!");
			break;
		}
}

// Funções de pontuação por perca ou ganho para atividade
function PtPerda(Id) {

	switch (Id) {
		case 1:
			one.calorias = one.calorias - 200;
			document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
			break;
		case 2:
			two.calorias = two.calorias - 200;
			document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
			break;
		case 3:
			three.calorias = three.calorias - 200;
			document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
			break;
		case 4:
			four.calorias = four.calorias - 200;
			document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
			break;
		default:
			alert("Erro!");
			break;
	}
}

function PtGanho(Id) {

	switch (Id) {
		case 1:
			one.calorias = one.calorias + 400;
			document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
			break;
		case 2:
			two.calorias = two.calorias + 400;
			document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
			break;
		case 3:
			three.calorias = three.calorias + 400;
			document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
			break;
		case 4:
			four.calorias = four.calorias + 400;
			document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
			break;
		default:
			alert("Erro!");
			break;
	}
}
// Pontuação para chegada a meta 
function PtMeta(Id) {

	switch (Id) {
		case 1:
			one.calorias = one.calorias + 1500;
			document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
			break;
		case 2:
			two.calorias = two.calorias + 1500;
			document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
			break;
		case 3:
			three.calorias = three.calorias + 1500;
			document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
			break;
		case 4:
			four.calorias = four.calorias + 1500;
			document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
			break;
		default:
			alert("Erro!");
			break;
	}
}


// Função p/ a escolha entre as opções dos pinos andarem ou entrarem no tabuleiro 
function Escolha(Peca) {
document.getElementById("pieceTwo").style.visibility = "hidden";
document.getElementById("pieceThree").style.visibility = "hidden";
document.getElementById("AudClick2").play();
//Alternar Jogadores
	switch (Vez){
		case 1:
			Vez = Vez + 1;
			posDado();
			Mensagem02(2);
			FecharJanelaJg();

//Escolha entre sair da base ou andar peça
			switch (saida[1]) {
//Sair da base

				case 1:
				PtSaida(1);
				document.getElementById("Pieces").style.visibility = "hidden";
				document.getElementById("pieceOne").style.visibility = "hidden";
				
				document.getElementById("pieceOne").disabled = true;
// Escolha da peça
					switch (Peca) {

						case 1:
							Base[1] = false;
							this.x=one.posX1;
							this.y=one.posY1;
							one.posX1 = posicao[56][0];
							one.posY1 = posicao[56][1];
							limparObj(x, y);
							Volta_Base(false,1);
							Desenhar();
							break;
						default:
							alert("Erro!");
							break;

					}
					break;

// Andar peça
				case 2:
					document.getElementById("Pieces").style.visibility = "hidden";
					document.getElementById("pieceOne").style.visibility = "hidden";

					document.getElementById("pieceOne").disabled = true;
// Escolha da peça
						switch (Peca) {
							case 1:
								andar(1, one.dado, 1);
								break;
							default:
								alert("Erro ao andar");
								break;
						}
					break;

				default:
					alert("Erro de saída");
					break;
				}
		break;

		case 2:
			Vez = Vez + 1;
			posDado();
			Mensagem02(3);
			FecharJanelaJg();
// Escolha entre sair da base ou andar peça 
			switch (saida[2]) {
//Sair da base
				case 1:
					PtSaida(2);
					document.getElementById("Pieces").style.visibility = "hidden";
					document.getElementById("pieceOne").style.visibility = "hidden";
					
					document.getElementById("pieceOne").disabled = true;
// Escolha da peça
					switch (Peca) {

						case 1:
							Base[2] = false;
							this.x=two.posX1;
							this.y=two.posY1;
							two.posX1 = posicao[14][0];
							two.posY1 = posicao[14][1];
							limparObj(x, y);
							Volta_Base(false,2);
							Desenhar();
							break;
						default:
							alert("Erro!");
							break;
					}
				break;
// Andar peça
				case 2:
					document.getElementById("Pieces").style.visibility = "hidden";
					document.getElementById("pieceOne").style.visibility = "hidden";
					
					document.getElementById("pieceOne").disabled = true;
// Escolha de peça
					switch(Peca) {
						case 1:
							andar(2, two.dado, 1);
							break;
						default:
							alert("Erro ao andar");
							break;
					}
				break;

				default:
					alert("Erro de saída");
					break;
			}
		break;

		case 3:
			Vez = Vez + 1;
			posDado();
			Mensagem02(4);
			FecharJanelaJg();
// Escolha entre sair da base ou andar peça 
			switch (saida[3]) {
// Sair da base
				case 1:
				PtSaida(3);
					document.getElementById("Pieces").style.visibility = "hidden";
					document.getElementById("pieceOne").style.visibility = "hidden";
					
					document.getElementById("pieceOne").disabled = true;
// Escolha da peça
					switch (Peca) {

						case 1:
							Base[3] = false;
							this.x=three.posX1;
							this.y=three.posY1;
							three.posX1 = posicao[42][0];
							three.posY1 = posicao[42][1];
							limparObj(x, y);
							Volta_Base(false,3);
							Desenhar();
							break;
						default:
							alert("Erro!");
							break;
					}
				break;

// Andar peça
				case 2:
					document.getElementById("Pieces").style.visibility = "hidden";
					document.getElementById("pieceOne").style.visibility = "hidden";

					document.getElementById("pieceOne").disabled = true;
// Escolha de peça
					switch (Peca) {
						case 1:
							andar(3, three.dado, 1);
							break;
						default:
							alert("Erro ao andar");
							break;
					}
				break;

				default:
					alert("Erro de saída");
					break;
}
		break;

		case 4:
			Vez = 1;
			posDado();
			Mensagem02(1);
			FecharJanelaJg();
// Escolha entre sair da base ou andar peça 
			switch (saida[4]) {
// Sair da base
				case 1:
					PtSaida(4);
					document.getElementById("Pieces").style.visibility = "hidden";
					document.getElementById("pieceOne").style.visibility = "hidden";
					
					document.getElementById("pieceOne").disabled = true;
// Escolha da peça
					switch (Peca) {

						case 1:
							Base[4] = false;
							this.x=four.posX1;
							this.y=four.posY1;
							four.posX1 = posicao[28][0];
							four.posY1 = posicao[28][1];
							limparObj(x, y);
							Volta_Base(false,4);
							Desenhar();
							break;
					}
				break;

// Andar peça
				case 2:
					document.getElementById("Pieces").style.visibility = "hidden";
					document.getElementById("pieceOne").style.visibility = "hidden";

					document.getElementById("pieceOne").disabled = true;
// Escolha de peça
					switch (Peca) {
						case 1:
							andar(4, four.dado, 1);
						break;
						default:
							alert("Erro ao andar");
					}
				break;

				default:
					alert("Erro de saída");
					break;
			}
		break;

		default:
			alert("Erro na Vez do jogador");
			break;
	}
}

// Função p/ a opção do pino entrar no tabuleiro 
function Saida(OPT) {

	document.getElementById("SairPeca").style.visibility = "hidden";
	document.getElementById("AndarPeca").style.visibility = "hidden";
	document.getElementById("pieceOne").style.visibility = "visible";
	document.getElementById("pieceTwo").style.visibility = "hidden";
	document.getElementById("pieceThree").style.visibility = "hidden";
	document.getElementById("AndarPeca").disabled = true;
	
		switch (Vez) {
	
			case 1:
				switch (OPT) {
	
					case 1:
						saida[1] = 1;
						ok[1] = true;
						if(Base[1] == true) {
							document.getElementById("pieceOne").disabled = false;
							if (Base[1] == false & End[1] == false) {
								document.getElementById("pieceOne").disabled = true;
							}
						}
					break;
	
					case 2:
						saida[1] = 2;
						if( Base[1] == false) {
							document.getElementById("pieceOne").disabled = true;
							if (Base[1] == false & End[1] == false) {
								document.getElementById("pieceOne").disabled = false;
							}
							if (Base[1] == false & End[1] == true) {
								document.getElementById("pieceOne").disabled = true;
							}
						}Escolha(1);
					break;
				}
			break;
	
			case 2:
				switch (OPT) {
					case 1:
						saida[2] = 1;
						ok[2] = true;
						if( Base[2] == true) {
							document.getElementById("pieceOne").disabled = false;
							
							if (Base[2] == false & End[2] == false) {
								document.getElementById("pieceOne").disabled = true;
							}
						}
					break;
				
					case 2:
						saida[2] = 2;
							if( Base[2] == false) {
								document.getElementById("pieceOne").disabled = true;
								
								if (Base[2] == false & End[2] == false) {
									document.getElementById("pieceOne").disabled = false;
								}
								if (Base[2] == false & End[2] == true) {
									document.getElementById("pieceOne").disabled = true;
								}
							}Escolha(1);
					break;
				}
			break;
	
			case 3:
				switch (OPT) {
					case 1:
					saida[3] = 1;
					ok[3] = true;
					if(Base[3] == true) {
						document.getElementById("pieceOne").disabled = false;
						
						if (Base[3] == false & End[3] == false) {
							document.getElementById("pieceOne").disabled = true;
						}
					}
					break;
	
					case 2:
					saida[3] = 2;
					if( Base[3] == false || Base[8] == false || Base[9] == false ) {
						document.getElementById("pieceOne").disabled = true;
						
						if (Base[3] == false & End[3] == false) {
							document.getElementById("pieceOne").disabled = false;
						}
						if (Base[3] == false & End[3] == true) {
							document.getElementById("pieceOne").disabled = true;
						}
					}Escolha(1);
					break;
				}
			break;
	
			case 4:
				switch (OPT) {
					case 1:
					saida[4] = 1;
					ok[4] = true;
					if( Base[4] == true) {
						document.getElementById("pieceOne").disabled = false;
						
						if (Base[4] == false & End[4] == false) {
							document.getElementById("pieceOne").disabled = true;
						}
					}
					break;
	
					case 2:
						saida[4] = 2;
						if( Base[4] == false || Base[11] == false || Base[12] == false ) {
							document.getElementById("pieceOne").disabled = true;
							if (Base[4] == false & End[4] == false) {
								document.getElementById("pieceOne").disabled = false;
							}
							if (Base[4] == false & End[4] == true) {
								document.getElementById("pieceOne").disabled = true;
							}
						}Escolha(1);
					break;
				}
			break;
	
		default :
		alert("Erro");
		break;
	}
}

// Função p/ manipulação de valores sobre quais pinos estão na base
function Bases() {
	document.getElementById("Dado").disabled = true;
switch(Vez){
case 1:
// numero 5 peão na base e não terminou
	if( one.dado == 5 && Base[1] == true && End[1]==false){
		document.getElementById("Pieces").style.visibility = "visible";
		document.getElementById("SairPeca").style.visibility = "visible";
		document.getElementById("AndarPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").disabled = true;
		document.getElementById("SairPeca").disabled = false;
	}// numero diferente 5 peão na base e não terminou
	if( one.dado != 5 && Base[1] == true && End[1]==false){
		document.getElementById("Pieces").style.visibility = "hidden";
		document.getElementById("SairPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").disabled = true;
		document.getElementById("SairPeca").disabled = true;
	}// numero igual ou diferente de 5 peão no jogo e não terminou
	if( (one.dado == 5 || one.dado!=5) && Base[1] == false && End[1]==false){
		document.getElementById("Pieces").style.visibility = "visible";
		document.getElementById("SairPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").style.visibility = "visible";
		document.getElementById("AndarPeca").disabled = false;
		document.getElementById("SairPeca").disabled = true;
	}// numero igual ou diferente 5 peão na base e terminou
	if( (one.dado == 5 || one.dado!=5 ) && Base[1] == true && End[1]==true){
		document.getElementById("Pieces").style.visibility = "hidden";
		document.getElementById("SairPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").disabled = true;
		document.getElementById("SairPeca").disabled = true;
	}

break;
case 2:// numero 5 peão na base e não terminou
	if( two.dado == 5 && Base[2] == true && End[2]==false){
		document.getElementById("Pieces").style.visibility = "visible";
		document.getElementById("SairPeca").style.visibility = "visible";
		document.getElementById("AndarPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").disabled = true;
		document.getElementById("SairPeca").disabled = false;
	}// numero diferente 5 peão na base e não terminou
	if( two.dado != 5 && Base[2] == true && End[2]==false){
		document.getElementById("Pieces").style.visibility = "hidden";
		document.getElementById("SairPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").disabled = true;
		document.getElementById("SairPeca").disabled = true;
	}// numero igual ou diferente de 5 peão no jogo e não terminou
	if( (two.dado == 5 || two.dado!=5) && Base[2] == false && End[2]==false){
		document.getElementById("Pieces").style.visibility = "visible";
		document.getElementById("SairPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").style.visibility = "visible";
		document.getElementById("AndarPeca").disabled = false;
		document.getElementById("SairPeca").disabled = true;
	}// numero igual ou diferente 5 peão na base e terminou
	if( (two.dado == 5 || two.dado!=5 ) && Base[2] == true && End[2]==true){
		document.getElementById("Pieces").style.visibility = "hidden";
		document.getElementById("SairPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").disabled = true;
		document.getElementById("SairPeca").disabled = true;
	}
break;
case 3:// numero 5 peão na base e não terminou
	if( three.dado == 5 && Base[3] == true && End[3]==false){
		document.getElementById("Pieces").style.visibility = "visible";
		document.getElementById("SairPeca").style.visibility = "visible";
		document.getElementById("AndarPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").disabled = true;
		document.getElementById("SairPeca").disabled = false;
	}// numero diferente 5 peão na base e não terminou
	if( three.dado != 5 && Base[3] == true && End[3]==false){
		document.getElementById("Pieces").style.visibility = "hidden";
		document.getElementById("SairPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").disabled = true;
		document.getElementById("SairPeca").disabled = true;
	}// numero igual ou diferente de 5 peão no jogo e não terminou
	if( (three.dado == 5 || three.dado!=5) && Base[3] == false && End[3]==false){
		document.getElementById("Pieces").style.visibility = "visible";
		document.getElementById("SairPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").style.visibility = "visible";
		document.getElementById("AndarPeca").disabled = false;
		document.getElementById("SairPeca").disabled = true;
	}// numero igual ou diferente 5 peão na base e terminou
	if( (three.dado == 5 || three.dado!=5 ) && Base[3] == true && End[3]==true){
		document.getElementById("Pieces").style.visibility = "hidden";
		document.getElementById("SairPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").disabled = true;
		document.getElementById("SairPeca").disabled = true;
	}
break;	
case 4:// numero 5 peão na base e não terminou
	if( four.dado == 5 && Base[4] == true && End[4]==false){
		document.getElementById("Pieces").style.visibility = "visible";
		document.getElementById("SairPeca").style.visibility = "visible";
		document.getElementById("AndarPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").disabled = true;
		document.getElementById("SairPeca").disabled = false;
	}// numero diferente 5 peão na base e não terminou
	if( four.dado != 5 && Base[4] == true && End[4]==false){
		document.getElementById("Pieces").style.visibility = "hidden";
		document.getElementById("SairPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").disabled = true;
		document.getElementById("SairPeca").disabled = true;
	}// numero igual ou diferente de 5 peão no jogo e não terminou
	if( (four.dado == 5 || four.dado!=5) && Base[4] == false && End[4]==false){
		document.getElementById("Pieces").style.visibility = "visible";
		document.getElementById("SairPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").style.visibility = "visible";
		document.getElementById("AndarPeca").disabled = false;
		document.getElementById("SairPeca").disabled = true;
	}// numero igual ou diferente 5 peão na base e terminou
	if( (four.dado == 5 || four.dado!=5 ) && Base[4] == true && End[4]==true){
		document.getElementById("Pieces").style.visibility = "hidden";
		document.getElementById("SairPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").style.visibility = "hidden";
		document.getElementById("AndarPeca").disabled = true;
		document.getElementById("SairPeca").disabled = true;
	}
break;
}}

// Função de retorno do pino a base
function Volta_Base(seguro, Id_Vez) {
	if(Base[1] == true){
	ok[1] = false;
	}
	if(Base[2] == true) {
	ok[2] = false;
	}
	if(Base[3] == true) {
	ok[3] = false;
	}
	if(Base[4] == true) {
	ok[4] = false;
	}
    switch (Id_Vez) {
        case 1:
			seguro=seguros(1);
            //peão verde 1 - peão vermelho 1
            if (one.posX1 == two.posX1 && one.posY1 == two.posY1) {
                if (seguro == true) {
                    alert("Está seguro");
                } else if (seguro == false) {
					document.getElementById("AudVB").play();
                    PtGanho(1);
                    PtPerda(2);
                    two.posX1 = posRed[0][0];
                    two.posY1 = posRed[0][1];
					Qtd_Voltas[2]=0;
                    Base[2] = true;
                    DadoB[1] = 14;
                }
            } 
             //peão verde 1 - peão Amarelo 1
            if (one.posX1 == three.posX1 && one.posY1 == three.posY1) {
                if (seguro == true) {
                    alert("Está seguro");
                } else if (seguro == false) {
					document.getElementById("AudVB").play();
                    PtGanho(1);
                    PtPerda(3);
                    three.posX1 = posYellow[0][0];
                    three.posY1 = posYellow[0][1];
					Qtd_Voltas[3]=0;
                    Base[3] = true;
                    DadoC[1] = 42;
                }
            } 
			//peão verde 1 - peão Azul 1
            if (one.posX1 == four.posX1 && one.posY1 == four.posY1) {
                if (seguro == true) {
                    alert("Está seguro");
                } else if (seguro == false) {
					document.getElementById("AudVB").play();
                    PtGanho(1);
                    PtPerda(4);
                    four.posX1 = posBlue[0][0];
                    four.posY1 = posBlue[0][1];
					Qtd_Voltas[4]=0;
                    Base[4] = true;
                    DadoD[1] = 28;
                }}
            break;
        case 2: 
			seguro=seguros(2);
		//peão vermelho 1 - verde 1
            if (two.posX1 == one.posX1 && two.posY1 == one.posY1) {
                if (seguro == true) {
                    alert("Está seguro");
                } else if (seguro == false) {
					document.getElementById("AudVB").play();
                    PtGanho(2);
                    PtPerda(1);
                    one.posX1 = posGreen[0][0];
                    one.posY1 = posGreen[0][1];
					Qtd_Voltas[1]=0;
                    Base[1] = true;
                    DadoA[1] = 0;
                }}
				//peão vermelho 1 - Amarelo 1
            if (two.posX1 == three.posX1 && two.posY1 == three.posY1) {
                if (seguro == true) {
                    alert("Está seguro");
                } else if (seguro == false) {
					document.getElementById("AudVB").play();
                    PtGanho(2);
                    PtPerda(3);
                    three.posX1 = posYellow[0][0];
                    three.posY1 = posYellow[0][1];
					Qtd_Voltas[3]=0;
                    Base[3] = true;
                    DadoC[1] = 42;
                }
            } 
            //peão vermelho 1 - Azul 1
            if (two.posX1 == four.posX1 && two.posY1 == four.posY1) {
                if (seguro == true) {
                    alert("Está seguro");
                } else if (seguro == false) {
					document.getElementById("AudVB").play();
                    PtGanho(2);
                    PtPerda(4);
                    four.posX1 = posBlue[0][0];
                    four.posY1 = posBlue[0][1];
					Qtd_Voltas[4]=0;
                    Base[4] = true;
                    DadoD[1] = 28;
                }
            }
            break;
        case 3: //peão amarelo 1 - vermelho 1
			seguro=seguros(3);
            if (three.posX1 == two.posX1 && three.posY1 == two.posY1) {
                if (seguro == true) {
                    alert("Está seguro");
                } else if (seguro == false) {
					document.getElementById("AudVB").play();
                    PtGanho(3);
                    PtPerda(2);
                    two.posX1 = posRed[0][0];
                    two.posY1 = posRed[0][1];
					Qtd_Voltas[2]=0;
                    Base[2] = true;
                    DadoB[1] = 14;
                }
            }  
			//peão amarelo 1 - verde 1
            if (three.posX1 == one.posX1 && three.posY1 == one.posY1) {
                if (seguro == true) {
                    alert("Está seguro");
                } else if (seguro == false) {
					document.getElementById("AudVB").play();
                    PtGanho(3);
                    PtPerda(1);
                    one.posX1 = posGreen[0][0];
                    one.posY1 = posGreen[0][1];
					Qtd_Voltas[1]=0;
                    Base[1] = true;
                    DadoA[1] = 0;
                }
            } 
            //peão amarelo 1 - azul 1
            if (three.posX1 == four.posX1 && three.posY1 == four.posY1) {
                if (seguro == true) {
                    alert("Está seguro");
                } else if (seguro == false) {
					document.getElementById("AudVB").play();
                    PtGanho(3);
                    PtPerda(4);
                    four.posX1 = posBlue[0][0];
                    four.posY1 = posBlue[0][1];
					Qtd_Voltas[4]=0;
                    Base[4] = true;
                    DadoD[1] = 28;
                }
            }
            break;
        case 4: //peão azul 1 - verde 1
			seguro=seguros(4);
            if (four.posX1 == one.posX1 && four.posY1 == one.posY1) {
                if (seguro == true) {
                    alert("Está seguro");
                } else if (seguro == false) {
					document.getElementById("AudVB").play();
                    PtGanho(4);
                    PtPerda(1);
                    one.posX1 = posGreen[0][0];
                    one.posY1 = posGreen[0][1];
					Qtd_Voltas[1]=0;
                    Base[1] = true;
                    DadoA[1] = 0;
                }
            }
			//peão azul 1 - amarelo 1
            if (four.posX1 == three.posX1 && four.posY1 == three.posY1) {
                if (seguro == true) {
                    alert("Está seguro");
                } else if (seguro == false) {
					document.getElementById("AudVB").play();
                    PtGanho(4);
                    PtPerda(3);
                    three.posX1 = posYellow[0][0];
                    three.posY1 = posYellow[0][1];
					Qtd_Voltas[3]=0;
                    Base[3] = true;
                    DadoC[1] = 42;
                }
            } 
			//peão azul 1 - vermelho 1
            if (four.posX1 == two.posX1 && four.posY1 == two.posY1) {
                if (seguro == true) {
                    alert("Está seguro");
                } else if (seguro == false) {
					document.getElementById("AudVB").play();
                    PtGanho(4);
                    PtPerda(2);
                    two.posX1 = posRed[0][0];
                    two.posY1 = posRed[0][1];
					Qtd_Voltas[2]=0;
                    Base[2] = true;
                    DadoB[1] = 14;
                }
            } 
            break;
    }
}

// Função p/ abrir a aba das regras
function Regras() {
  
  document.getElementById("regras").style.visibility = "visible";
  document.getElementById("AudClick").play();
}
	
// Função p/ fechar a aba das regras
function RemoveRegras() {

	document.getElementById("regras").style.visibility = "hidden";
	document.getElementById("AudClick").play();
}

//Função p/ fechar ou abrir a aba de Dica da pergunta

function AbrirDicaP() {
	document.getElementById("DicaCartao").style.visibility = "visible";
	document.getElementById("AudClick").play();
	Dic = 1;
	}

function RemoveDicaP() {

	document.getElementById("DicaCartao").style.visibility = "hidden";
	document.getElementById("AudClick").play();
	}

// Função para caso o pino caia nas casas especiais
function casas_Especiais(vez_Num, pX,pY){

	if ( (pX == 215 && pY == 104 ) || (pX == 385 && pY == 199 ) || (pX == 283 && pY == 359 ) || (pX == 113 && pY == 263 ) ) {

		document.getElementById("Quitanda").style.visibility = "visible";
		document.getElementById("fique_dentro").style.visibility = "visible";
		InicialKit(vez_Num);
		Mensagem02(vez_Num);
		posDadoEspecial(vez_Num);
	}

	if ( (pX == 215 && pY == 40 ) || (pX == 453 && pY == 199 ) || (pX == 283 && pY == 423 ) || (pX == 45 && pY == 263 ) ) {

	Volta_Base (true, vez_Num); } else {Volta_Base(false,vez_Num);}

	if ( (pX == 249 && pY == 8 ) || (pX == 487 && pY == 231 ) || (pX == 249 && pY == 455 ) || (pX == 11 && pY == 231 ) ) {

		document.getElementById("Exercicio").style.visibility = "visible";
		document.getElementById("Dado").disabled = true;
		InicialEx(vez_Num);
		Mensagem02(vez_Num);
		posDadoEspecial(vez_Num);
	}

	if ( (pX == 113 && pY == 200 ) || (pX == 283 && pY == 103 ) || (pX == 385 && pY == 263 ) || (pX == 215 && pY == 359 ) ) {

		document.getElementById("Dicas").style.visibility = "visible";
		document.getElementById("Diquinha").innerHTML = Dicas();
		Mensagem02(vez_Num);
		posDadoEspecial(vez_Num);
	}

	if ( (pX == 215 && pY == 200 ) || (pX == 283 && pY == 199 ) || (pX == 283 && pY == 263 ) || (pX == 215 && pY == 263 ) ) {

		Carta();
		document.getElementById("Dado").disabled = true;
		document.getElementById("regras").disabled = true;
		Mensagem02(vez_Num);
		posDadoEspecial(vez_Num);
	}

}
// Função de atualizar canvas e dados
function Desenhar(){
	switch (Vez) {
		case 1:
// Pinos na base
			Canvas = document.getElementById("Ludo");
			ctx = Canvas.getContext("2d");
// peão Verde
			ImgV1 = new Image();
			ImgV1.src = "Imgs/peao/green/1.png"		
// peão Vermelho
			ImgVrm1 = new Image();
			ImgVrm1.src = "Imgs/peao/red/1.png"
// peão Amarelo
			ImgA1 = new Image();
			ImgA1.src = "Imgs/peao/yellow/1.png"
// peão Azul
			ImgAz1 = new Image();
			ImgAz1.src = "Imgs/peao/blue/1.png"
			
			ImgV1.onload = function() {
				ctx.drawImage(ImgV1,one.posX1,one.posY1);
			}
			ImgVrm1.onload = function() {
				ctx.drawImage(ImgVrm1,two.posX1,two.posY1);
			}
			ImgA1.onload = function() {
				ctx.drawImage(ImgA1,three.posX1,three.posY1);
			}
			ImgAz1.onload = function() {
				ctx.drawImage(ImgAz1,four.posX1,four.posY1);
			}
		four.dado = 0;
		break;
		case 2:
// Pinos na base
			Canvas = document.getElementById("Ludo");
			ctx = Canvas.getContext("2d");
// peão Verde
			ImgV1 = new Image();
			ImgV1.src = "Imgs/peao/green/1.png"			
// peão Vermelho
			ImgVrm1 = new Image();
			ImgVrm1.src = "Imgs/peao/red/1.png"
// peão Amarelo
			ImgA1 = new Image();
			ImgA1.src = "Imgs/peao/yellow/1.png"
// peão Azul
			ImgAz1 = new Image();
			ImgAz1.src = "Imgs/peao/blue/1.png"
			
			ImgV1.onload = function() {
				ctx.drawImage(ImgV1,one.posX1,one.posY1);
			}
			ImgVrm1.onload = function() {
				ctx.drawImage(ImgVrm1,two.posX1,two.posY1);
			}
			ImgA1.onload = function() {
				ctx.drawImage(ImgA1,three.posX1,three.posY1);
			}
			ImgAz1.onload = function() {
				ctx.drawImage(ImgAz1,four.posX1,four.posY1);
			}
		one.dado = 0;
		break;
		case 3:
// Pinos na base
			Canvas = document.getElementById("Ludo");
			ctx = Canvas.getContext("2d");
// peão Verde
			ImgV1 = new Image();
			ImgV1.src = "Imgs/peao/green/1.png"
// peão Vermelho
			ImgVrm1 = new Image();
			ImgVrm1.src = "Imgs/peao/red/1.png"
// peão Amarelo
			ImgA1 = new Image();
			ImgA1.src = "Imgs/peao/yellow/1.png"
// peão Azul
			ImgAz1 = new Image();
			ImgAz1.src = "Imgs/peao/blue/1.png"
			
			ImgV1.onload = function() {
				ctx.drawImage(ImgV1,one.posX1,one.posY1);
			}
			ImgVrm1.onload = function() {
				ctx.drawImage(ImgVrm1,two.posX1,two.posY1);
			}
			ImgA1.onload = function() {
				ctx.drawImage(ImgA1,three.posX1,three.posY1);
			}
			ImgAz1.onload = function() {
				ctx.drawImage(ImgAz1,four.posX1,four.posY1);
			}
		two.dado = 0;
		break;
		case 4:
		// Pinos na base
			Canvas = document.getElementById("Ludo");
			ctx = Canvas.getContext("2d");

			// peão Verde
			ImgV1 = new Image();
			ImgV1.src = "Imgs/peao/green/1.png"
			
		// peão Vermelho
			ImgVrm1 = new Image();
			ImgVrm1.src = "Imgs/peao/red/1.png"
		// peão Amarelo
			ImgA1 = new Image();
			ImgA1.src = "Imgs/peao/yellow/1.png"
		// peão Azul
			ImgAz1 = new Image();
			ImgAz1.src = "Imgs/peao/blue/1.png"
			
			ImgV1.onload = function() {
				ctx.drawImage(ImgV1,one.posX1,one.posY1);
			}
			ImgVrm1.onload = function() {
				ctx.drawImage(ImgVrm1,two.posX1,two.posY1);
			}
			ImgA1.onload = function() {
				ctx.drawImage(ImgA1,three.posX1,three.posY1);
			}
			ImgAz1.onload = function() {
				ctx.drawImage(ImgAz1,four.posX1,four.posY1);
			}
		three.dado = 0;
		break;
	}
	
// Verificação da base
	if (Base[1] == true) {
	ok[1] = false;
	}
	if (Base[2] == true) {
	ok[2] = false;
	}
	if (Base[3] == true) {
	ok[3] = false;
	}
	if (Base[4] == true) {
	ok[4] = false;
	}
	
// Resultado Final Do Jogo
	if ( (End[1] == true) || (End[2] == true) || (End[3] == true) || (End[4] == true)) {
		document.getElementById("AudFinal").play();
		document.getElementById("Dado").style.visibility = "hidden";
		document.getElementById("Dado").disabled = true;
		document.getElementById("BtA").style.visibility = "hidden";
		document.getElementById("BtB").style.visibility = "hidden";
		document.getElementById("BtC").style.visibility = "hidden";
		document.getElementById("BtD").style.visibility = "hidden";
		document.getElementById("MensagemVencedor").style.visibility = "visible";
		document.getElementById("MsgVencedor").style.visibility = "visible";
		document.getElementById("Restart").style.visibility = "visible";
		document.getElementById("Venceu").style.visibility = "visible";
	
		if((one.calorias > two.calorias) && (one.calorias > three.calorias) && (one.calorias > four.calorias) ) {
			setInterval(function(){document.getElementById("MsgVencedor").innerHTML = ""},1000);
			setInterval(function(){document.getElementById("MsgVencedor").innerHTML = "V E N C E D O R &ensp; -"},2000);
			setInterval(function(){document.getElementById("Venceu").innerHTML = ""},1000);
			setInterval(function(){document.getElementById("Venceu").innerHTML = one.nome},2000);
		}
		if((two.calorias > one.calorias) && (two.calorias > three.calorias) && (two.calorias > four.calorias)) {
			setInterval(function(){document.getElementById("MsgVencedor").innerHTML = ""},1000);
			setInterval(function(){document.getElementById("MsgVencedor").innerHTML = "V E N C E D O R &ensp; -"},2000);
			setInterval(function(){document.getElementById("Venceu").innerHTML = ""},1000);
			setInterval(function(){document.getElementById("Venceu").innerHTML = two.nome},2000);
		}
		if((three.calorias > two.calorias) && (three.calorias > one.calorias) && (three.calorias > four.calorias)) {
			setInterval(function(){document.getElementById("MsgVencedor").innerHTML = ""},1000);
			setInterval(function(){document.getElementById("MsgVencedor").innerHTML = "V E N C E D O R &ensp; -"},2000);
			setInterval(function(){document.getElementById("Venceu").innerHTML = ""},1000);
			setInterval(function(){document.getElementById("Venceu").innerHTML = three.nome},2000);
		}
		if((four.calorias > two.calorias) && (four.calorias > three.calorias) && (four.calorias > one.calorias)) {
			setInterval(function(){document.getElementById("MsgVencedor").innerHTML = ""},1000);
			setInterval(function(){document.getElementById("MsgVencedor").innerHTML = "V E N C E D O R &ensp; -"},2000);
			setInterval(function(){document.getElementById("Venceu").innerHTML = ""},1000);
			setInterval(function(){document.getElementById("Venceu").innerHTML = four.nome},2000);
		}
		
	}
	// X's dos jogadores
if (End[1]==true) {
document.getElementById("X1").style.visibility = "visible";
if(EndSong[1]==false){document.getElementById("AudFin").play();EndSong[1]=true;}}
if (End[2]==true) {
document.getElementById("X4").style.visibility = "visible";
if(EndSong[2]==false){document.getElementById("AudFin").play();EndSong[2]=true;}}
if (End[3]==true) {
document.getElementById("X7").style.visibility = "visible";
if(EndSong[3]==false){document.getElementById("AudFin").play();EndSong[3]=true;}}
if (End[4]==true) {
document.getElementById("X10").style.visibility = "visible";
if(EndSong[4]==false){document.getElementById("AudFin").play();EndSong[4]=true;}}}

// Função para locomoção dos pinos
function andar(Vez,Novo_num_Dado, Peca){

// Escolha da Vez do jogador
	switch(Vez) {
		case 1:
			switch (Peca) {
				case 1:
					DadoA[Peca] = DadoA[Peca] + Novo_num_Dado;
					var dadoOficial = Novo_num_Dado;
// Dar a volta
					if(DadoA[Peca]>55) {
						DadoA[Peca] = DadoA[Peca] - 55;
						Qtd_Voltas[1] = 1;
					}
// Entrar na meta
					if (Qtd_Voltas[1]==1 && DadoA[Peca] >=1 && goalConfirmed[1] == false) {
						if(DadoA[Peca] == 6) {
							this.x= one.posX1;
							this.y= one.posY1;
							limparObj(x,y);
							one.posX1 = posGreen[0][0];
							one.posY1 = posGreen[0][1];
							Base[1] = true;
							PtGanho(1);
							End[1] = true;
							Desenhar();
							break;
						} else{
							goalConfirmed[1] = true;
							this.x= one.posX1;
							this.y= one.posY1;
							limparObj(x,y);
							one.posX1 = goalPositionGreen[DadoA[Peca]][0];
							one.posY1 = goalPositionGreen[DadoA[Peca]][1];
							Pt(1, Novo_num_Dado);
							Desenhar();
							break;}
					}
// Andar na meta
					if (goalConfirmed[1] == true && DadoA[Peca] < 6) {
						this.x= one.posX1;
						this.y= one.posY1;
						limparObj(x,y);
						one.posX1 = goalPositionGreen[DadoA[Peca]][0];
						one.posY1 = goalPositionGreen[DadoA[Peca]][1];
						Pt(1, Novo_num_Dado);
						Desenhar();
						break;
					}
// Ultima casa da meta
					if (goalConfirmed[1] == true && DadoA[Peca] > 6) {


						switch (DadoA[Peca]){
						case 7:
						DadoA[Peca] = DadoA[Peca] - 2;
						break;
						case 8:
						DadoA[Peca] = DadoA[Peca]/2;
						break;
						case 9:
						DadoA[Peca] = DadoA[Peca]/3;
						break;
						case 10:
						DadoA[Peca] = DadoA[Peca]/5;
						break;
						case 11:
						DadoA[Peca] = DadoA[Peca] - 10;
						break;
						}
						this.x= one.posX1;
						this.y= one.posY1;
						limparObj(x,y);
						one.posX1 = goalPositionGreen[DadoA[Peca]][0];
						one.posY1 = goalPositionGreen[DadoA[Peca]][1];
						alert("Você deve tirar o numero exato que falta para a meta");
						Desenhar();
						break;
					}
// Chegar a meta
					if (goalConfirmed[1] == true && DadoA[Peca] == 6) {
						this.x= one.posX1;
						this.y= one.posY1;
						limparObj(x,y);
						one.posX1 = posGreen[0][0];
						one.posY1 = posGreen[0][1];
						Base[1] = true;
						PtMeta(1);
						End[1] = true;
						Desenhar();
						break;
					}
					this.x= one.posX1;
					this.y= one.posY1;
					limparObj(x,y);
					one.posX1 = posicao[DadoA[Peca]][0];
					one.posY1 = posicao[DadoA[Peca]][1];
					Pt(1, Novo_num_Dado);	
					Desenhar();
					casas_Especiais(1, one.posX1, one.posY1);					
					break;
				default:
				alert("Erro");
		}
		break;
		case 2:
			switch (Peca) {
				case 1:
					DadoB[Peca] = DadoB[Peca] + Novo_num_Dado;
// Dar a volta
					if(DadoB[Peca]>56) {
						DadoB[Peca] = DadoB[Peca] - 56;
						Qtd_Voltas[2] = 1;
					}
// Entrar na meta
					if (Qtd_Voltas[2]== 1 && DadoB[Peca] > 13 && goalConfirmed[2] == false) {
					DadoB[Peca] = DadoB[Peca] - 13;
					if(DadoB[Peca]==6){
						this.x= two.posX1;
						this.y= two.posY1;
						limparObj(x,y);
						two.posX1 = posRed[0][0];
						two.posY1 = posRed[0][1];
						Base[2] = true;
						PtGanho(2);
						End[2] = true;
						Desenhar();
						break;
					}else{
							goalConfirmed[2] = true;
							this.x= two.posX1;
							this.y= two.posY1;
							limparObj(x,y);
							two.posX1 = goalPositionRed[DadoB[Peca]][0];
							two.posY1 = goalPositionRed[DadoB[Peca]][1];
							Pt(2, Novo_num_Dado);
							Desenhar();
							break;}
					}
// Andar na meta
					if (goalConfirmed[2] == true && DadoB[Peca] < 6) {
						this.x= two.posX1;
						this.y= two.posY1;
						limparObj(x,y);
						two.posX1 = goalPositionRed[DadoB[Peca]][0];
						two.posY1 = goalPositionRed[DadoB[Peca]][1];
						Pt(2, Novo_num_Dado);
						Desenhar();
						break;
					}
// Ultima casa da meta
					if (goalConfirmed[2] == true && DadoB[Peca] > 6) {
							switch (DadoB[Peca]){
						case 7:
						DadoB[Peca] = DadoB[Peca] - 2;
						break;
						case 8:
						DadoB[Peca] = DadoB[Peca]/2;
						break;
						case 9:
						DadoB[Peca] = DadoB[Peca]/3;
						break;
						case 10:
						DadoB[Peca] = DadoB[Peca]/5;
						break;
						case 11:
						DadoB[Peca] = DadoB[Peca] - 10;
						break;
						}
						this.x= two.posX1;
						this.y= two.posY1;
						limparObj(x,y);
						two.posX1 = goalPositionRed[DadoB[Peca]][0];
						two.posY1 = goalPositionRed[DadoB[Peca]][1];
						alert("Você deve tirar o numero exato que falta para a meta");
						Desenhar();
						break;
					}
// Chegar a meta
					if (goalConfirmed[2] == true && DadoB[Peca] == 6) {
						this.x= two.posX1;
						this.y= two.posY1;
						limparObj(x,y);
						two.posX1 = posRed[0][0];
						two.posY1 = posRed[0][1];
						Base[2] = true;
						PtMeta(2);
						End[2] = true;
						Desenhar();
						break;
					}
					this.x= two.posX1;
					this.y= two.posY1;
					limparObj(x,y);
					two.posX1 = posicao[DadoB[Peca]][0];
					two.posY1 = posicao[DadoB[Peca]][1];
					
					Pt(2, Novo_num_Dado);
					Desenhar();
					casas_Especiais(2, two.posX1, two.posY1);
					break;
				default:
					alert("Erro");
					break;
			}
		break;
		case 3:
			switch (Peca) {
				case 1:
					DadoC[Peca] = DadoC[Peca] + Novo_num_Dado;
//Dar a volta
					if(DadoC[Peca]>56) {
						DadoC[Peca] = DadoC[Peca] - 56;
						Qtd_Voltas[3] = 1;
					}
//Entrar na meta
					if (Qtd_Voltas[3]==1 && DadoC[Peca] > 41 && goalConfirmed[3] == false) {
						DadoC[Peca] = DadoC[Peca] - 41;
						if(DadoC[Peca]==6){
							this.x= three.posX1;
							this.y= three.posY1;
							limparObj(x,y);
							three.posX1 = posYellow[0][0];
							three.posY1 = posYellow[0][1];
							Base[3] = true;
							PtGanho(3);
							End[3] = true;
							Desenhar();
							break;
						}else{
							goalConfirmed[3] = true;
							this.x= three.posX1;
							this.y= three.posY1;
							limparObj(x,y);
							three.posX1 = goalPositionYellow[DadoC[Peca]][0];
							three.posY1 = goalPositionYellow[DadoC[Peca]][1];
							Pt(3, Novo_num_Dado);
							Desenhar();
							break;}
					}
// Andar na meta
					if (goalConfirmed[3] == true && DadoC[Peca] < 6) {
						this.x= three.posX1;
						this.y= three.posY1;
						limparObj(x,y);
						three.posX1 = goalPositionYellow[DadoC[Peca]][0];
						three.posY1 = goalPositionYellow[DadoC[Peca]][1];
						Pt(3, Novo_num_Dado);
						Desenhar();
						break;
					}
// Ultima casa da meta
					if (goalConfirmed[3] == true && DadoC[Peca] > 6) {
							switch (DadoC[Peca]){
						case 7:
						DadoC[Peca] = DadoC[Peca] - 2;
						break;
						case 8:
						DadoC[Peca] = DadoC[Peca]/2;
						break;
						case 9:
						DadoC[Peca] = DadoC[Peca]/3;
						break;
						case 10:
						DadoC[Peca] = DadoC[Peca]/5;
						break;
						case 11:
						DadoC[Peca] = DadoC[Peca] - 10;
						break;
						}
						this.x= three.posX1;
						this.y= three.posY1;
						limparObj(x,y);
						three.posX1 = goalPositionYellow[DadoC[Peca]][0];
						three.posY1 = goalPositionYellow[DadoC[Peca]][1];
						alert("Você deve tirar o numero exato que falta para a meta");
						Desenhar();
						break;
					}
// Chegar a meta
					if (goalConfirmed[3] == true && DadoC[Peca] == 6) {
						this.x= three.posX1;
						this.y= three.posY1;
						limparObj(x,y);
						three.posX1 = posYellow[0][0];
						three.posY1 = posYellow[0][1];
						Base[3] = true;
						PtMeta(3);
						End[3] = true;
						Desenhar();
						break;
					}
					this.x= three.posX1;
					this.y= three.posY1;
					limparObj(x,y);
					three.posX1 = posicao[DadoC[Peca]][0];
					three.posY1 = posicao[DadoC[Peca]][1];
					Pt(3, Novo_num_Dado);
					Desenhar();
					casas_Especiais(3, three.posX1, three.posY1);
					break;
			default:
				alert("Erro");
				break;
			}
		break;
		case 4:
			switch (Peca) {
	
				case 1:
					DadoD[Peca] = DadoD[Peca] + Novo_num_Dado;
// Dar a volta
					if(DadoD[Peca]>56) {
						DadoD[Peca] = DadoD[Peca] - 56;
						Qtd_Voltas[4] = 1;
					}
// Entrar na meta
					if (Qtd_Voltas[4]==1 && DadoD[Peca] > 27 && goalConfirmed[4] == false) {
						DadoD[Peca] = DadoD[Peca] - 27;
						if(DadoD[Peca]==6){
							this.x= four.posX1;
							this.y= four.posY1;
							limparObj(x,y);
							four.posX1 = posBlue[0][0];
							four.posY1 = posBlue[0][1];
							Base[4] = true;
							PtGanho(4);
							End[4] = true;
							Desenhar();
							break;
						}else{
						goalConfirmed[4] = true;
						this.x= four.posX1;
						this.y= four.posY1;
						limparObj(x,y);
						four.posX1 = goalPositionBlue[DadoD[Peca]][0];
						four.posY1 = goalPositionBlue[DadoD[Peca]][1];
						Pt(4, Novo_num_Dado);
						Desenhar();
						break;}
					}
// Andar na meta
					if (goalConfirmed[4] == true && DadoD[Peca] < 6) {
						this.x= four.posX1;
						this.y= four.posY1;
						limparObj(x,y);
						four.posX1 = goalPositionBlue[DadoD[Peca]][0];
						four.posY1 = goalPositionBlue[DadoD[Peca]][1];
						Pt(4, Novo_num_Dado);
						Desenhar();
						break;
					}
// Ultima casa da meta
					if (goalConfirmed[4] == true && DadoD[Peca] > 6) {
							switch (DadoD[Peca]){
						case 7:
						DadoD[Peca] = DadoD[Peca] - 2;
						break;
						case 8:
						DadoD[Peca] = DadoD[Peca]/2;
						break;
						case 9:
						DadoD[Peca] = DadoD[Peca]/3;
						break;
						case 10:
						DadoD[Peca] = DadoD[Peca]/5;
						break;
						case 11:
						DadoD[Peca] = DadoD[Peca] - 10;
						break;
						}
						this.x= four.posX1;
						this.y= four.posY1;
						limparObj(x,y);
						four.posX1 = goalPositionBlue[DadoD[Peca]][0];
						four.posY1 = goalPositionBlue[DadoD[Peca]][1];
						alert("Você deve tirar o numero exato que falta para a meta");
						Desenhar();
						break;
					}
// Chegar a meta
					if (goalConfirmed[4] == true && DadoD[Peca] == 6) {
						this.x= four.posX1;
						this.y= four.posY1;
						limparObj(x,y);
						four.posX1 = posBlue[0][0];
						four.posY1 = posBlue[0][1];
						Base[4] = true;
						PtMeta(4);
						End[4] = true;
						Desenhar();
						break;
					}
					this.x= four.posX1;
					this.y= four.posY1;
					limparObj(x,y);
					four.posX1 = posicao[DadoD[Peca]][0];
					four.posY1 = posicao[DadoD[Peca]][1];
					
					Pt(4, Novo_num_Dado); 
					Desenhar();
					casas_Especiais(4, four.posX1, four.posY1);
					break;
				default:
					alert("Erro sem fim");
					break;
			}
		break;
	}
}

// Função para adquirir o valor do dado
function Dado() {
	document.getElementById("AudD").play();  
	var Dado = Math.floor((Math.random() * 6) + 1);
    switch (Vez) {
        case 1:
            one.dado = Dado;
			if(dv[1]==1 && Base[1]==true && End[1]==false){
				one.dado=5;
				dv[1]=0;
			}else{
				dv[1]=1;
			}
            // Imagem dos Dados
            if (one.dado == 1) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/verde/1.png')";
            }
            if (one.dado == 2) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/verde/2.png')";
            }
            if (one.dado == 3) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/verde/3.png')";
            }
            if (one.dado == 4) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/verde/4.png')";
            }
            if (one.dado == 5) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/verde/5.png')";
            }
            if (one.dado == 6) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/verde/6.png')";
            }
            Bases();
            if ((one.dado != 5) && (Base[1] == true)) {
                Vez += 1;
                one.dado = 0;
                posDado();
                Mensagem02(2);
                FecharJanelaJg();
                break;
            } else {
                if ((one.dado == 1 || one.dado == 2 || one.dado == 3 || one.dado == 4 || one.dado == 6) && ok[1] == false) {
                    document.getElementById("Pieces").style.visibility = "hidden";
                    document.getElementById("SairPeca").style.visibility = "hidden";
                    document.getElementById("AndarPeca").style.visibility = "hidden";
                    // Mensagem para alternância de jogador
                    Vez = Vez + 1;
                    one.dado = 0;
                    posDado();
                    Mensagem02(2);
                    FecharJanelaJg();
                }
            }
            break;

        case 2:
            two.dado = Dado;
			if(dv[2]==1 && Base[2]==true && End[2]==false){
				two.dado=5;
				dv[2]=0;
			}else{
				dv[2]=1;
			}
            // Imagem dos Dados
            if (two.dado == 1) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/vermelho/1.png')";
            }
            if (two.dado == 2) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/vermelho/2.png')";
            }
            if (two.dado == 3) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/vermelho/3.png')";
            }
            if (two.dado == 4) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/vermelho/4.png')";
            }
            if (two.dado == 5) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/vermelho/5.png')";
            }
            if (two.dado == 6) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/vermelho/6.png')";
            }

            Bases();
            if ((two.dado != 5) && (Base[2] == true)) {
                Vez += 1;
                two.dado = 0;
                posDado();
                Mensagem02(3);
                FecharJanelaJg();
                break;
            } else {
                if ((two.dado == 1 || two.dado == 2 || two.dado == 3 || two.dado == 4 || two.dado == 6) && ok[2] == false) {
                    document.getElementById("Pieces").style.visibility = "hidden";
                    document.getElementById("SairPeca").style.visibility = "hidden";
                    document.getElementById("AndarPeca").style.visibility = "hidden";

                    Vez = Vez + 1;
                    two.dado = 0;
                    posDado();
                    Mensagem02(3);
                    FecharJanelaJg();
                }
            }
            break;

        case 3:
            three.dado = Dado;
			if(dv[3]==1 && Base[3]==true && End[3]==false){
				three.dado=5;
				dv[3]=0;
			}else{
				dv[3]=1;
			}
            // Imagem dos Dados
            if (three.dado == 1) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/amarelo/1.png')";
            }
            if (three.dado == 2) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/amarelo/2.png')";
            }
            if (three.dado == 3) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/amarelo/3.png')";
            }
            if (three.dado == 4) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/amarelo/4.png')";
            }
            if (three.dado == 5) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/amarelo/5.png')";
            }
            if (three.dado == 6) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/amarelo/6.png')";
            }

            Bases();
            if ((three.dado != 5) && (Base[3] == true)) {
                Vez += 1;
                three.dado = 0;
                posDado();
                Mensagem02(4);
                FecharJanelaJg();
                break;
            } else {
                if ((three.dado == 1 || three.dado == 2 || three.dado == 3 || three.dado == 4 || three.dado == 6) && ok[3] == false) {
                    document.getElementById("Pieces").style.visibility = "hidden";
                    document.getElementById("SairPeca").style.visibility = "hidden";
                    document.getElementById("AndarPeca").style.visibility = "hidden";

                    Vez = Vez + 1;
                    three.dado = 0;
                    posDado();
                    Mensagem02(4);
                    FecharJanelaJg();
                }
            }
            break;

        case 4:
            four.dado = Dado;
			if(dv[4]==1 && Base[4]==true && End[4]==false){
				four.dado=5;
				dv[4]=0;
			}else{
				dv[4]=1;
			}
            // Imagem dos Dados
            if (four.dado == 1) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/azul/1.png')";
            }
            if (four.dado == 2) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/azul/2.png')";
            }
            if (four.dado == 3) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/azul/3.png')";
            }
            if (four.dado == 4) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/azul/4.png')";
            }
            if (four.dado == 5) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/azul/5.png')";
            }
            if (four.dado == 6) {
                document.getElementById("Dado").style.backgroundImage = "url('Imgs/dados/azul/6.png')";
            }

            Bases();
            if ((four.dado != 5) && (Base[4] == true)) {
                Vez = 1;
                four.dado = 0;
                posDado();
                Mensagem02(1);
                FecharJanelaJg();
                break;
            } else {
                if ((four.dado == 1 || four.dado == 2 || four.dado == 3 || four.dado == 4 || four.dado == 6) && ok[4] == false) {
                    document.getElementById("Pieces").style.visibility = "hidden";
                    document.getElementById("SairPeca").style.visibility = "hidden";
                    document.getElementById("AndarPeca").style.visibility = "hidden";

                    Vez = 1;
                    four.dado = 0;
                    posDado();
                    Mensagem02(1);
                    FecharJanelaJg();
                }
            }
            break;
    }
}
// Função para abrir a aba de dicas das perguntas
function dicasPerguntas(i){
	document.getElementById("dicasPergunta").innerHTML = dicasPergunta[i];
}

//conometro pergunta
var min=3; var seg=0;
function relogio(){		
	if((min > 0) || (seg > 0)){				
		if(seg == 0){					
			seg = 59;					
			min = min - 1;	
		}else{					
			seg = seg - 1;				
		}if(min.toString().length == 1){					
			min = "0" + min;				
		}if(seg.toString().length == 1){					
			seg = "0" + seg;				
		}				
		document.getElementById('temporizador').innerHTML = min + ":" + seg;	
		if((nRespondeu==true && (min==0 && seg==0)) || nRespondeu==false ){		
			tempoPerguntaFim();
			min = 3;
			seg = 0;
		}else{
		timeTimeout=setTimeout('relogio()', 1000);
		}
	}else{				
		document.getElementById('temporizador').innerHTML = "00:00";
	}		
}	

// Função para abrir a aba das cartas
function Carta(){
	document.getElementById("Cartao").style.visibility = "Visible";
	document.getElementById("BtA").disabled = false;
	document.getElementById("BtB").disabled = false;
	document.getElementById("BtC").disabled = false;
	document.getElementById("BtD").disabled = false;
	i=Math.floor((Math.random()*50));
	dicasPerguntas(i);
	document.getElementById("Pergunta").innerHTML =  perguntas[i][0];
	document.getElementById("A").innerHTML = " A) " + perguntas[i][1];
	document.getElementById("B").innerHTML = " B) " + perguntas[i][2];
	document.getElementById("C").innerHTML = " C) " + perguntas[i][3];
	document.getElementById("D").innerHTML = " D) " + perguntas[i][4];
	nRespondeu=true;
	min=3; seg=0;
	relogio();
}

		
//Função para finalizar o desafio da pergunta
function tempoPerguntaFim(){
	document.getElementById("DicaCartao").style.visibility = "hidden";
	document.getElementById("Cartao").style.visibility = "Hidden";
	document.getElementById("BtA").disabled = true;
	document.getElementById("BtB").disabled = true;
	document.getElementById("BtC").disabled = true;
	document.getElementById("BtD").disabled = true;
	document.getElementById("regras").disabled = false; 
	if(this.nRespondeu==true){
		vez=Vez-1;
		if(Vez==1){
			vez=4;
		}
		Pt(vez,"-15");
	}if(this.nRespondeu==false){
		FecharJanelaJg();
	}
	posDado();
	document.getElementById("Dado").disabled = false;
	clearTimeout(timeTimeout);
} 

// Função para abrir a aba das dicas
function Dicas() {
	
	i=Math.floor((Math.random()*21)+1);
	return dicas[i];
}

// Função para abrir a aba do saco de exercícios
function Saco_Exercicio() {
	
	i=Math.floor((Math.random()*11));
	return saco_exercicio[i];
}

// Função de correção para a resposta da casa especial Cartas
function Respostas(respostas) {
	nRespondeu=false;
	var vez = Vez - 1;
	
	if (vez == 0) {vez = 4;}

	if(perguntas[i][respostas]==perguntas[i][5]){
		if(Dic == 1) {
		document.getElementById(bt[respostas]).style.backgroundColor= "Green";
		document.getElementById("RC").play();
		setTimeout(function(){document.getElementById(bt[respostas]).style.backgroundColor= "#EEEEEE";}, 1000);
		Pt(vez, 30);
		} else if (Dic ==0) {
		document.getElementById(bt[respostas]).style.backgroundColor= "Green";
		document.getElementById("RC").play();
		setTimeout(function(){document.getElementById(bt[respostas]).style.backgroundColor= "#EEEEEE";}, 1000);
		Pt(vez, 60);
	}
	}
	else{
		document.getElementById(bt[respostas]).style.backgroundColor= "Red";
		document.getElementById("RE").play();
		setTimeout(function(){document.getElementById(bt[respostas]).style.backgroundColor= "#EEEEEE";}, 1000);
		Pt(vez,"-15");	
	}
	Dic=0;
	setTimeout(function(){document.getElementById("Cartao").style.visibility = "hidden";Dic=0;document.getElementById("DicaCartao").style.visibility = "hidden";document.getElementById("Dado").disabled = false; document.getElementById("regras").disabled = false; posDado(); Mensagem02(Vez); FecharJanelaJg();},1000);
	
	document.getElementById("BtA").disabled = true;
	document.getElementById("BtB").disabled = true;
	document.getElementById("BtC").disabled = true;
	document.getElementById("BtD").disabled = true;
	clearTimeout(timeTimeout);
}

// Função limpar canvas
function limparObj(x,y){
	ctx.clearRect(x,y,400,400);
}

// Funções p/ mensagens de transições 
function Mensagem01(){
	
	if(Vez==1){
		document.getElementById("NomeJg").innerHTML = one.nome; 
		document.getElementById("Msg").style.visibility = "visible";
		setTimeout(function(){document.getElementById("jogadorOne").style.boxShadow = "1px 1px 50px 7px #027D02";},1500);
	}
	if(Vez==2){
		document.getElementById("NomeJg").innerHTML = two.nome; 
		document.getElementById("Msg").style.visibility = "visible";
		setTimeout(function(){document.getElementById("jogadorTwo").style.boxShadow = "1px 1px 50px 7px #A60303";},1500);
	}
	if(Vez==3){
		document.getElementById("NomeJg").innerHTML = three.nome; 
		document.getElementById("Msg").style.visibility = "visible";
		setTimeout(function(){document.getElementById("jogadorThree").style.boxShadow = "1px 1px 50px 7px #9C9C00";},1500);
	}
	if(Vez==4){
		document.getElementById("NomeJg").innerHTML = four.nome;
		document.getElementById("Msg").style.visibility = "visible";
		setTimeout(function(){document.getElementById("jogadorFour").style.boxShadow = "1px 1px 50px 7px #000085";},1500);
	}

	document.getElementById("Dado").disabled = true;
}

function Mensagem02(id){
	
	if(id==1){
		setTimeout(function(){document.getElementById("jogadorFour").style.boxShadow = "0px 0px 10px 2px rgba(0, 0, 0, 0.8)";document.getElementById("jogadorThree").style.boxShadow = "0px 0px 10px 2px rgba(0, 0, 0, 0.8)";document.getElementById("jogadorTwo").style.boxShadow = "0px 0px 10px 2px rgba(0, 0, 0, 0.8)";document.getElementById("jogadorOne").style.boxShadow = "1px 1px 50px 6px #027D02";},1300);
	}
	if(id==2){
		setTimeout(function(){document.getElementById("jogadorOne").style.boxShadow = "0px 0px 10px 2px rgba(0, 0, 0, 0.8)";document.getElementById("jogadorTwo").style.boxShadow = "1px 1px 50px 6px #A60303";document.getElementById("jogadorThree").style.boxShadow = "0px 0px 10px 2px rgba(0, 0, 0, 0.8)";document.getElementById("jogadorFour").style.boxShadow = "0px 0px 10px 2px rgba(0, 0, 0, 0.8)";},1300);
	}
	if(id==3){
		setTimeout(function(){document.getElementById("jogadorOne").style.boxShadow = "0px 0px 10px 2px rgba(0, 0, 0, 0.8)";document.getElementById("jogadorTwo").style.boxShadow = "0px 0px 10px 2px rgba(0, 0, 0, 0.8)";document.getElementById("jogadorFour").style.boxShadow = "0px 0px 10px 2px rgba(0, 0, 0, 0.8)";document.getElementById("jogadorThree").style.boxShadow = "1px 1px 50px 6px #9C9C00";},1300);
	}
	if(id==4){
		setTimeout(function(){document.getElementById("jogadorOne").style.boxShadow = "0px 0px 10px 2px rgba(0, 0, 0, 0.8)";document.getElementById("jogadorTwo").style.boxShadow = "0px 0px 10px 2px rgba(0, 0, 0, 0.8)";document.getElementById("jogadorThree").style.boxShadow = "0px 0px 10px 2px rgba(0, 0, 0, 0.8)";document.getElementById("jogadorFour").style.boxShadow = "1px 1px 50px 6px #000085";},1300);
	}
	
	document.getElementById("Dado").disabled = true;
}

// Função p/ fechar aba das mensagens 
function FecharJanelaJg(){

// Mensagem para alternância de jogador
	if(Vez==1){setTimeout(function(){document.getElementById("Msg").style.visibility = "hidden";}, 1300);}
	if(Vez==2){setTimeout(function(){document.getElementById("Msg").style.visibility = "hidden";}, 1300);}
	if(Vez==3){setTimeout(function(){document.getElementById("Msg").style.visibility = "hidden";}, 1300);}
	if(Vez==4){setTimeout(function(){document.getElementById("Msg").style.visibility = "hidden";}, 1300);}
	
	setTimeout(function(){document.getElementById("Dado").disabled = false;}, 1300);
}

// Funções p/ posição do dado
function posDado(){

//Alternar Jogadores
	switch(Vez){
	
		case 1:
			setTimeout(function() {Virar(1); document.getElementById("Dado").style.backgroundImage = "url('Imgs/Dado_Verde.gif')"; document.getElementById("LancaDado").style.left = "10%"; }, 1300);
			break;		
		case 2:
			setTimeout(function() {Virar(2);document.getElementById("Dado").style.backgroundImage = "url('Imgs/Dado_Vermelho.gif')";document.getElementById("LancaDado").style.left = "85%"; }, 1300);
			break;
		case 3:
			setTimeout(function() {Desvirar(3);document.getElementById("Dado").style.backgroundImage = "url('Imgs/Dado_Amarelo.gif')";document.getElementById("LancaDado").style.left = "10%"; }, 1300);
			break;
		case 4:
			setTimeout(function() {Desvirar(4);document.getElementById("Dado").style.backgroundImage = "url('Imgs/Dado_Azul.gif')";document.getElementById("LancaDado").style.left = "85%";}, 1300)
			break;
	}
}

function posDadoEspecial(Id){

//Alternar Jogadores
	switch(Id){
	
		case 1:
			setTimeout(function() {Virar(1); document.getElementById("Dado").style.backgroundImage = "url('Imgs/Dado_Verde.gif')"; document.getElementById("LancaDado").style.left = "10%"; document.getElementById("Dado").disabled=true }, 1300);
			break;
		case 2:
			setTimeout(function() {Virar(2); document.getElementById("Dado").style.backgroundImage = "url('Imgs/Dado_Vermelho.gif')";document.getElementById("LancaDado").style.left = "85%";document.getElementById("Dado").disabled=true }, 1300);
			break;			
		case 3:
			setTimeout(function() {Desvirar(3);document.getElementById("Dado").style.backgroundImage = "url('Imgs/Dado_Amarelo.gif')";document.getElementById("LancaDado").style.left = "10%"; document.getElementById("Dado").disabled=true}, 1300);	
			break;
		
		case 4:
			setTimeout(function() {Desvirar(4);document.getElementById("Dado").style.backgroundImage = "url('Imgs/Dado_Azul.gif')";document.getElementById("LancaDado").style.left = "85%";document.getElementById("Dado").disabled=true }, 1300)
			break;
	}
}

// Funções p/ alternar a cor do dado inicial no saco de exercicio e quitanda
function InicialEx(Id){
	document.getElementById("resultadoExercicio").innerHTML = " ";
	i=Math.floor((Math.random()*10)+1);
	document.getElementById("PergEx").innerHTML =  saco_exercicio[i];

	switch(Id){
	
		case 1:
			document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/Dado_Verde.gif')";
			document.getElementById("NomeJgdr1").disabled = true;
			document.getElementById("NomeJgdr2").disabled = false;
			document.getElementById("NomeJgdr3").disabled = false;
			document.getElementById("NomeJgdr4").disabled = false;		
			break;
		
		case 2:
			document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/Dado_Vermelho.gif')";
			document.getElementById("NomeJgdr2").disabled = true;
			document.getElementById("NomeJgdr1").disabled = false;
			document.getElementById("NomeJgdr3").disabled = false;
			document.getElementById("NomeJgdr4").disabled = false;
			break;
		
		case 3:
			document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/Dado_Amarelo.gif')";
			document.getElementById("NomeJgdr3").disabled = true;
			document.getElementById("NomeJgdr2").disabled = false;
			document.getElementById("NomeJgdr1").disabled = false;
			document.getElementById("NomeJgdr4").disabled = false;
			break;
		
		case 4:
			document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/Dado_Azul.gif')";
			document.getElementById("NomeJgdr4").disabled = true;
			document.getElementById("NomeJgdr2").disabled = false;
			document.getElementById("NomeJgdr3").disabled = false;
			document.getElementById("NomeJgdr1").disabled = false;
			break;
	}
}

function InicialKit(Id){

	switch(Id){
	
		case 1:
			document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/Dado_Verde.gif')";
			Jgdr[1] = true;
			Jgdr[2] = Jgdr[3] = Jgdr[4] = false;
			break;
		
		case 2:
			document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/Dado_Vermelho.gif')";
			Jgdr[2] = true;
			Jgdr[1] = Jgdr[3] = Jgdr[4] = false;
			break;
		
		case 3:
			document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/Dado_Amarelo.gif')";
			Jgdr[3] = true;
			Jgdr[2] = Jgdr[1] = Jgdr[4] = false;
			break;
		
		case 4:
			document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/Dado_Azul.gif')";
			Jgdr[4] = true;
			Jgdr[2] = Jgdr[3] = Jgdr[1] = false;
			break;
	}
}

// Função p/ selecionar jogador a submeter-se no saco de exercícios
function SelecionarJg(Id){

	document.getElementById("AudClick").play();

	switch(Id){
	
		case 1:
			document.getElementById("NomeJgdr1").style.backgroundColor = "GRAY";
			document.getElementById("NomeJgdr2").style.backgroundColor = "#DDDDDD";
			document.getElementById("NomeJgdr3").style.backgroundColor = "#DDDDDD";
			document.getElementById("NomeJgdr4").style.backgroundColor = "#DDDDDD";
			Jgdr[1] = true;
			Jgdr[2] = Jgdr[3] = Jgdr[4] = false;
			break;
	
		case 2:
			document.getElementById("NomeJgdr2").style.backgroundColor = "GRAY";
			document.getElementById("NomeJgdr1").style.backgroundColor = "#DDDDDD";
			document.getElementById("NomeJgdr3").style.backgroundColor = "#DDDDDD";
			document.getElementById("NomeJgdr4").style.backgroundColor = "#DDDDDD";
			Jgdr[2] = true;
			Jgdr[1] = Jgdr[3] = Jgdr[4] = false;
			break;
			
		case 3:
			document.getElementById("NomeJgdr3").style.backgroundColor = "GRAY";
			document.getElementById("NomeJgdr2").style.backgroundColor = "#DDDDDD";
			document.getElementById("NomeJgdr1").style.backgroundColor = "#DDDDDD";
			document.getElementById("NomeJgdr4").style.backgroundColor = "#DDDDDD";
			Jgdr[3] = true;
			Jgdr[2] = Jgdr[1] = Jgdr[4] = false;
			break;

		case 4:
			document.getElementById("NomeJgdr4").style.backgroundColor = "GRAY";
			document.getElementById("NomeJgdr2").style.backgroundColor = "#DDDDDD";
			document.getElementById("NomeJgdr3").style.backgroundColor = "#DDDDDD";
			document.getElementById("NomeJgdr1").style.backgroundColor = "#DDDDDD";
			Jgdr[4] = true;
			Jgdr[2] = Jgdr[3] = Jgdr[1] = false;
			break;
		default:
			Jgdr[1] = Jgdr[2] = Jgdr[3] = Jgdr[1] = false;
			break;
		}

}

// Função p/ selecionar alimentos na quitanda
function SelecionarQuitanda(x, Id, comida) {

	document.getElementById("AudClick").play();

	var vez = Vez-1;
	
	if (vez == 0) {vez = 4;}

	switch(vez) {
		case 1:
			for(a=0;a<10;a++){
				for(b=0;b<2;b++){
					if(comida==quitanda[x][a][b]){
						switch (x) {
							case 0:
								if(qp==2){alert("Ação Inválida");}else{qp+=1;}
								comidaSelecionada[0][qp-1]=quitanda[x][a][1];
								break;
							case 1:
								if(qc==3){alert("Ação Inválida");}else{qc+=1;}
								comidaSelecionada[1][qc-1]=quitanda[x][a][1];
								break;
							case 2:
								if(ql==2){alert("Ação Inválida");}else{ql+=1;}
								comidaSelecionada[2][ql-1]=quitanda[x][a][1];
								break;
						}
					}
				}
			}
		break;
		case 2:
			for(a=0;a<10;a++){
				for(b=0;b<2;b++){
					if(comida==quitanda[x][a][b]){
						switch (x) {
							case 0:
								if(qp==2){alert("Ação Inválida");}else{qp+=1;}
								comidaSelecionada[0][qp-1]=quitanda[x][a][1];
								break;
							case 1:
								if(qc==3){alert("Ação Inválida");}else{qc+=1;}
								comidaSelecionada[1][qc-1]=quitanda[x][a][1];
								break;
							case 2:
								if(ql==2){alert("Ação Inválida");}else{ql+=1;}
								comidaSelecionada[2][ql-1]=quitanda[x][a][1];
								break;
						}
					}
				}
			}
		break;
		case 3:
			for(a=0;a<10;a++){
				for(b=0;b<2;b++){
					if(comida==quitanda[x][a][b]){
						switch (x) {
							case 0:
								if(qp==2){alert("Ação Inválida");}else{qp+=1;}
								comidaSelecionada[0][qp-1]=quitanda[x][a][1];
								break;
							case 1:
								if(qc==3){alert("Ação Inválida");}else{qc+=1;}
								comidaSelecionada[1][qc-1]=quitanda[x][a][1];
								break;
							case 2:
								if(ql==2){alert("Ação Inválida");}else{ql+=1;}
								comidaSelecionada[2][ql-1]=quitanda[x][a][1];
								break;
						}
					}
				}
			}
		break;
		case 4:
			for(a=0;a<10;a++){
				for(b=0;b<2;b++){
					if(comida==quitanda[x][a][b]){
						switch (x) {
							case 0:
								if(qp==2){alert("Ação Inválida");}else{qp+=1;}
								comidaSelecionada[0][qp-1]=quitanda[x][a][1];
								break;
							case 1:
								if(qc==3){alert("Ação Inválida");}else{qc+=1;}
								comidaSelecionada[1][qc-1]=quitanda[x][a][1];
								break;
							case 2:
								if(ql==2){alert("Ação Inválida");}else{ql+=1;}
								comidaSelecionada[2][ql-1]=quitanda[x][a][1];
								break;
						}
					}
				}
			}
		break;
	}
	document.getElementById("Mark01").innerHTML = qp;
	document.getElementById("Mark02").innerHTML = qc;
	document.getElementById("Mark03").innerHTML = ql;
}

// Funções dos dados no saco de exercício e quitanda
function DadoQuit(){

	document.getElementById("AudD").play();

	if((qp==2)&&(qc==3)&&(ql==2)){
		var Dado = Math.floor((Math.random()*6) + 1);
		document.getElementById("Dado").disabled = false;
		var gramas;
		if(Dado==1){
			gramas=Dado*100;
			var carbo = ((0.2*gramas)*comidaSelecionada[1][0]) + ((0.2*gramas)*comidaSelecionada[1][1]) + ((0.2*gramas)*comidaSelecionada[1][2]);
			var protein = ((0.075*gramas)*comidaSelecionada[0][0]) + ((0.075*gramas)*comidaSelecionada[0][1]);
			var fat = ((0.125*gramas)*comidaSelecionada[2][0]) + ((0.125*gramas)*comidaSelecionada[2][1]);
		}else if(Dado==2){
			gramas=Dado*100;
			var carbo = ((0.2*gramas)*comidaSelecionada[1][0]) + ((0.2*gramas)*comidaSelecionada[1][1]) + ((0.2*gramas)*comidaSelecionada[1][2]);
			var protein = ((0.075*gramas)*comidaSelecionada[0][0]) + ((0.075*gramas)*comidaSelecionada[0][1]);
			var fat = ((0.125*gramas)*comidaSelecionada[2][0]) + ((0.125*gramas)*comidaSelecionada[2][1]);
		
		}else if(Dado==3){
			gramas=Dado*100;
			var carbo = ((0.2*gramas)*comidaSelecionada[1][0]) + ((0.2*gramas)*comidaSelecionada[1][1]) + ((0.2*gramas)*comidaSelecionada[1][2]);
			var protein = ((0.075*gramas)*comidaSelecionada[0][0]) + ((0.075*gramas)*comidaSelecionada[0][1]);
			var fat = ((0.125*gramas)*comidaSelecionada[2][0]) + ((0.125*gramas)*comidaSelecionada[2][1]);
		
		}else if(Dado==4){
			gramas=Dado*100;
			var carbo = ((0.2*gramas)*comidaSelecionada[1][0]) + ((0.2*gramas)*comidaSelecionada[1][1]) + ((0.2*gramas)*comidaSelecionada[1][2]);
			var protein = ((0.075*gramas)*comidaSelecionada[0][0]) + ((0.075*gramas)*comidaSelecionada[0][1]);
			var fat = ((0.125*gramas)*comidaSelecionada[2][0]) + ((0.125*gramas)*comidaSelecionada[2][1]);
		
		}else if(Dado==5){
			gramas=Dado*100;
			var carbo = ((0.2*gramas)*comidaSelecionada[1][0]) + ((0.2*gramas)*comidaSelecionada[1][1]) + ((0.2*gramas)*comidaSelecionada[1][2]);
			var protein = ((0.075*gramas)*comidaSelecionada[0][0]) + ((0.075*gramas)*comidaSelecionada[0][1]);
			var fat = ((0.125*gramas)*comidaSelecionada[2][0]) + ((0.125*gramas)*comidaSelecionada[2][1]);
		
		}else if(Dado==6){
			gramas=Dado*100;
			var carbo = ((0.2*gramas)*comidaSelecionada[1][0]) + ((0.2*gramas)*comidaSelecionada[1][1]) + ((0.2*gramas)*comidaSelecionada[1][2]);
			var protein = ((0.075*gramas)*comidaSelecionada[0][0]) + ((0.075*gramas)*comidaSelecionada[0][1]);
			var fat = ((0.125*gramas)*comidaSelecionada[2][0]) + ((0.125*gramas)*comidaSelecionada[2][1]);
		}
	
	document.getElementById("Id_Carbo").innerHTML = carbo.toFixed(2);
	document.getElementById("Id_Lip").innerHTML = fat.toFixed(2);
	document.getElementById("Id_Prot").innerHTML = protein.toFixed(2);
	var Tot = carbo + fat + protein;
	document.getElementById("Id_Tot").innerHTML = Tot.toFixed(2);
	
		if (Jgdr[1]) {
// Imagem dos Dados
			if (Dado == 1) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/verde/1.png')";}
			if (Dado == 2) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/verde/2.png')";}
			if (Dado == 3) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/verde/3.png')";}
			if (Dado == 4) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/verde/4.png')";}
			if (Dado == 5) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/verde/5.png')";}
			if (Dado == 6) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/verde/6.png')";}
			one.calorias += Tot;
			document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
		}
		if (Jgdr[2]) {
// Imagem dos Dados
			if (Dado == 1) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/vermelho/1.png')";}
			if (Dado == 2) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/vermelho/2.png')";}
			if (Dado == 3) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/vermelho/3.png')";}
			if (Dado == 4) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/vermelho/4.png')";}
			if (Dado == 5) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/vermelho/5.png')";}
			if (Dado == 6) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/vermelho/6.png')";}
			two.calorias += Tot;
			document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
		}
		if (Jgdr[3]) {
// Imagem dos Dados
			if (Dado == 1) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/amarelo/1.png')";}
			if (Dado == 2) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/amarelo/2.png')";}
			if (Dado == 3) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/amarelo/3.png')";}
			if (Dado == 4) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/amarelo/4.png')";}
			if (Dado == 5) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/amarelo/5.png')";}
			if (Dado == 6) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/amarelo/6.png')";}
			three.calorias += Tot;
			document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
		}
		if (Jgdr[4]) {
// Imagem dos Dados
			if (Dado == 1) { document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/azul/1.png')";}
			if (Dado == 2) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/azul/2.png')";}
			if (Dado == 3) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/azul/3.png')";}
			if (Dado == 4) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/azul/4.png')";}
			if (Dado == 5) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/azul/5.png')";}
			if (Dado == 6) {document.getElementById("DadoKit").style.backgroundImage = "url('Imgs/dados/azul/6.png')";}
			four.calorias += Tot;
			document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
		}
		
	document.getElementById("DadoKit").disabled=true;
	qc = qp = ql = 0;
	setTimeout(function(){document.getElementById("Id_Tot").innerHTML = "X"; document.getElementById("Mark03").innerHTML = 0; document.getElementById("Mark02").innerHTML = 0; document.getElementById("Mark01").innerHTML = 0; document.getElementById("Id_Prot").innerHTML = "X";document.getElementById("Id_Lip").innerHTML = "X";document.getElementById("Id_Carbo").innerHTML = "X";document.getElementById("DadoKit").disabled=false; document.getElementById("Quitanda").style.visibility="hidden" ;posDado(); Mensagem02(Vez); FecharJanelaJg();}, 3000);
	}	
}

function DadoExerc(Id_Vez){
	
	document.getElementById("AudD").play();
	
	var Dado = Math.floor((Math.random()*6) + 1);
	var vez = Id_Vez-1;
	if (Id_Vez == 1) {
	vez = 4;
	}
		
	
		if(Jgdr[1] == true || Jgdr[2] == true || Jgdr[3] == true || Jgdr[4] == true) {
	
			document.getElementById("Dado").disabled = false;
			var tempo;
	
			if(Dado == 1 || Dado == 2 || Dado == 3 || Dado == 4 || Dado == 5 || Dado == 6){ tempo = (Dado*10+20); }
		
			switch (vez) {
				case 1:
	// Imagem dos Dados
					if (Dado == 1) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/verde/1.png')";}
					if (Dado == 2) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/verde/2.png')";}
					if (Dado == 3) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/verde/3.png')";}
					if (Dado == 4) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/verde/4.png')";}
					if (Dado == 5) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/verde/5.png')";}
					if (Dado == 6) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/verde/6.png')";}
					break;
				case 2:
	// Imagem dos Dados
					if (Dado == 1) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/vermelho/1.png')";}
					if (Dado == 2) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/vermelho/2.png')";}
					if (Dado == 3) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/vermelho/3.png')";}
					if (Dado == 4) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/vermelho/4.png')";}
					if (Dado == 5) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/vermelho/5.png')";}
					if (Dado == 6) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/vermelho/6.png')";}
					break;
				case 3:
	// Imagem dos Dados
					if (Dado == 1) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/amarelo/1.png')";}
					if (Dado == 2) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/amarelo/2.png')";}
					if (Dado == 3) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/amarelo/3.png')";}
					if (Dado == 4) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/amarelo/4.png')";}
					if (Dado == 5) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/amarelo/5.png')";}
					if (Dado == 6) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/amarelo/6.png')";}
					break;
				case 4:
	// Imagem dos Dados
					if (Dado == 1) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/azul/1.png')";}
					if (Dado == 2) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/azul/2.png')";}
					if (Dado == 3) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/azul/3.png')";}
					if (Dado == 4) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/azul/4.png')";}
					if (Dado == 5) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/azul/5.png')";}
					if (Dado == 6) {document.getElementById("DadoEx").style.backgroundImage = "url('Imgs/dados/azul/6.png')";}
					break;
			}
	
	
			if(Jgdr[1]){
	
				if (saco_exercicio[1]==saco_exercicio[i]) {
					gCalorias=(tempo*(12));
					one.calorias = one.calorias - gCalorias;
					document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[2]==saco_exercicio[i]) {
					gCalorias=(tempo*(7.5));
					one.calorias = one.calorias - gCalorias;
					document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[3]==saco_exercicio[i]) {
					gCalorias=(tempo*(5));
					one.calorias = one.calorias - gCalorias;
					document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[4]==saco_exercicio[i]) {
					gCalorias=(tempo*(4.2));
					one.calorias = one.calorias - gCalorias;
					document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[5]==saco_exercicio[i]) {
					gCalorias=(tempo*(5.5));
					one.calorias = one.calorias - gCalorias;
					document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[6]==saco_exercicio[i]) {
					gCalorias=(tempo*(4.3));
					one.calorias = one.calorias - gCalorias;
					document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[7]==saco_exercicio[i]) {
					gCalorias=(tempo*(6));
					one.calorias = one.calorias - gCalorias;
					document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[8]==saco_exercicio[i]) {
					gCalorias=(tempo*(7));
					one.calorias = one.calorias - gCalorias;
					document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[9]==saco_exercicio[i]) {
					gCalorias=(tempo*(4.7));
					one.calorias = one.calorias - gCalorias;
					document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[10]==saco_exercicio[i]) {
					gCalorias=(tempo*(10));
					one.calorias = one.calorias - gCalorias;
					document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[11]==saco_exercicio[i]) {
					gCalorias=(tempo*(6.1));
					one.calorias = one.calorias - gCalorias;
					document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
			}
			if (Jgdr[2]) {
	
				if (saco_exercicio[1]==saco_exercicio[i]) {
					gCalorias=(tempo*(12));
					two.calorias = two.calorias - gCalorias;
					document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[2]==saco_exercicio[i]) {
					gCalorias=(tempo*(7.5));
					two.calorias = two.calorias - gCalorias;
					document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[3]==saco_exercicio[i]) {
					gCalorias=(tempo*(5));
					two.calorias = two.calorias - gCalorias;
					document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[4]==saco_exercicio[i]) {
					gCalorias=(tempo*(4.2));
					two.calorias = two.calorias - gCalorias;
					document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[5]==saco_exercicio[i]) {
					gCalorias=(tempo*(5.5));
					two.calorias = two.calorias - gCalorias;
					document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[6]==saco_exercicio[i]) {
					gCalorias=(tempo*(4.3));
					two.calorias = two.calorias - gCalorias;
					document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[7]==saco_exercicio[i]) {
					gCalorias=(tempo*(6));
					two.calorias = two.calorias - gCalorias;
					document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[8]==saco_exercicio[i]) {
					gCalorias=(tempo*(7));
					two.calorias = two.calorias - gCalorias;
					document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[9]==saco_exercicio[i]) {
					gCalorias=(tempo*(4.7));
					two.calorias = two.calorias - gCalorias;
					document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[10]==saco_exercicio[i]) {
					gCalorias=(tempo*(10));
					two.calorias = two.calorias - gCalorias;
					document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[11]==saco_exercicio[i]) {
					gCalorias=(tempo*(6.1));
					two.calorias = two.calorias - gCalorias;
					document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
			}
			if(Jgdr[3]){
	
				if (saco_exercicio[1]==saco_exercicio[i]) {
					gCalorias=(tempo*(12));
					three.calorias = three.calorias - gCalorias;
					document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[2]==saco_exercicio[i]) {
					gCalorias=(tempo*(7.5));
					three.calorias = three.calorias - gCalorias;
					document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[3]==saco_exercicio[i]) {
					gCalorias=(tempo*(5));
					three.calorias = three.calorias - gCalorias;
					document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[4]==saco_exercicio[i]) {
					gCalorias=(tempo*(4.2));
					three.calorias = three.calorias - gCalorias;
					document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[5]==saco_exercicio[i]) {
					gCalorias=(tempo*(5.5));
					three.calorias = three.calorias - gCalorias;
					document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[6]==saco_exercicio[i]) {
					gCalorias=(tempo*(4.3));
					three.calorias = three.calorias - gCalorias;
					document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[7]==saco_exercicio[i]) {
					gCalorias=(tempo*(6));
					three.calorias = three.calorias - gCalorias;
					document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[8]==saco_exercicio[i]) {
					gCalorias=(tempo*(7));
					three.calorias = three.calorias - gCalorias;
					document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[9]==saco_exercicio[i]) {
					gCalorias=(tempo*(4.7));
					three.calorias = three.calorias - gCalorias;
					document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[10]==saco_exercicio[i]) {
					gCalorias=(tempo*(10));
					three.calorias = three.calorias - gCalorias;
					document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[11]==saco_exercicio[i]) {
					gCalorias=(tempo*(6.1));
					three.calorias = three.calorias - gCalorias;
					document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
			}
			if(Jgdr[4]){
	
				if (saco_exercicio[1]==saco_exercicio[i]) {
					gCalorias=(tempo*(12));
					four.calorias = four.calorias - gCalorias;
					document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[2]==saco_exercicio[i]) {
					gCalorias=(tempo*(7.5));
					four.calorias = four.calorias - gCalorias;
					document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[3]==saco_exercicio[i]) {
					gCalorias=(tempo*(5));
					four.calorias = four.calorias - gCalorias;
					document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[4]==saco_exercicio[i]) {
					gCalorias=(tempo*(4.2));
					four.calorias = four.calorias - gCalorias;
					document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[5]==saco_exercicio[i]) {
					gCalorias=(tempo*(5.5));
					four.calorias = four.calorias - gCalorias;
					document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[6]==saco_exercicio[i]) {
					gCalorias=(tempo*(4.3));
					four.calorias = four.calorias - gCalorias;
					document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[7]==saco_exercicio[i]) {
					gCalorias=(tempo*(6));
					four.calorias = four.calorias - gCalorias;
					document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[8]==saco_exercicio[i]) {
					gCalorias=(tempo*(7));
					four.calorias = four.calorias - gCalorias;
					document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[9]==saco_exercicio[i]) {
					gCalorias=(tempo*(4.7));
					four.calorias = four.calorias - gCalorias;
					document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[10]==saco_exercicio[i]) {
					gCalorias=(tempo*(10));
					four.calorias = four.calorias - gCalorias;
					document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
				if (saco_exercicio[11]==saco_exercicio[i]) {
					gCalorias=(tempo*(6.1));
					four.calorias = four.calorias - gCalorias;
					document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
					document.getElementById("resultadoExercicio").innerHTML = ("Perdeu: "+gCalorias+" Calorias");
				}
			}
			gCalorias=0;
			
	document.getElementById("DadoEx").disabled=true;
	setTimeout(function(){document.getElementById("NomeJgdr1").style.backgroundColor = "#DDDDDD"; document.getElementById("NomeJgdr2").style.backgroundColor = "#DDDDDD"; document.getElementById("NomeJgdr3").style.backgroundColor = "#DDDDDD"; document.getElementById("NomeJgdr4").style.backgroundColor = "#DDDDDD"; document.getElementById("DadoEx").disabled=false;document.getElementById("Exercicio").style.visibility = "hidden"; posDado(); Mensagem02(Vez); FecharJanelaJg();}, 3000);
		} 
	else if (Jgdr[1] == false && Jgdr[2] == false && Jgdr[3] == false && Jgdr[4] == false) { alert("Por favor, selecione um jogador."); }
	Jgdr[1] = Jgdr[2] = Jgdr[3] = Jgdr[4] = false;
}

// Função p/ confirmação da leitura
function Confirm(){
	document.getElementById("AudClick").play();
	document.getElementById("Dicas").style.visibility = "hidden";
	posDado();
	Mensagem02(Vez);
	FecharJanelaJg();
}

function Iniciar(){
	
	document.getElementById("AudClick").play();
	
// pegar nome
	one.nome = document.getElementById("Jg1").value;
	document.getElementById("JG1").innerHTML = one.nome;

	two.nome = document.getElementById("Jg2").value;
	document.getElementById("JG2").innerHTML = two.nome;

	three.nome = document.getElementById("Jg3").value;
	document.getElementById("JG3").innerHTML = three.nome;

	four.nome = document.getElementById("Jg4").value;
	document.getElementById("JG4").innerHTML = four.nome;
		
		if (one.nome== "" || one.nome == null) {
			one.nome = "Jogador 1";
			document.getElementById("JG1").innerHTML=one.nome;
		}
		if (two.nome=="" || two.nome == null) {
			two.nome = "Jogador 2";
			document.getElementById("JG2").innerHTML=two.nome;
		}
		if (three.nome=="" || three.nome == null) {
			three.nome = "Jogador 3";
			document.getElementById("JG3").innerHTML=three.nome;
		}
		if (four.nome=="" || four.nome == null) {
			four.nome = "Jogador 4";
			document.getElementById("JG4").innerHTML=four.nome;
		}
		
	document.getElementById("PlayerName").style.visibility = "hidden";
	document.getElementById("Instrucao").disabled = false;
	document.getElementById("thermo10").disabled = false;
	
// Disponibilidade do iniciar
//nome dos jogadores para o saco de exercicio
	document.getElementById("NomeJgdr1").innerHTML = one.nome;
	document.getElementById("NomeJgdr2").innerHTML = two.nome;
	document.getElementById("NomeJgdr3").innerHTML = three.nome;
	document.getElementById("NomeJgdr4").innerHTML = four.nome;
// Visibilidade dos botôes
	document.getElementById("Dado").style.visibility = "visible";
	document.getElementById("BtA").style.visibility = "visible";
	document.getElementById("BtB").style.visibility = "visible";
	document.getElementById("BtC").style.visibility = "visible";
	document.getElementById("BtD").style.visibility = "visible";
//Calorias dos jogadores
	document.getElementById("pontuacaoOne").innerHTML = one.calorias.toFixed(2);
	document.getElementById("pontuacaoTwo").innerHTML = two.calorias.toFixed(2);
	document.getElementById("pontuacaoThree").innerHTML = three.calorias.toFixed(2);
	document.getElementById("pontuacaoFour").innerHTML = four.calorias.toFixed(2);
// Pinos na base
	Canvas = document.getElementById("Ludo");
	ctx = Canvas.getContext("2d");

	// peão Verde
	ImgV1 = new Image();
	ImgV1.src = "Imgs/peao/green/1.png"
	
// peão Vermelho
	ImgVrm1 = new Image();
	ImgVrm1.src = "Imgs/peao/red/1.png"
// peão Amarelo
	ImgA1 = new Image();
	ImgA1.src = "Imgs/peao/yellow/1.png"
// peão Azul
	ImgAz1 = new Image();
	ImgAz1.src = "Imgs/peao/blue/1.png"
	
	ImgV1.onload = function() {
		ctx.drawImage(ImgV1,one.posX1,one.posY1);
	}
	ImgVrm1.onload = function() {
		ctx.drawImage(ImgVrm1,two.posX1,two.posY1);
	}
	ImgA1.onload = function() {
		ctx.drawImage(ImgA1,three.posX1,three.posY1);
	}
	ImgAz1.onload = function() {
		ctx.drawImage(ImgAz1,four.posX1,four.posY1);
	}

// Mensagem para alternância de jogador
	Mensagem01();
	FecharJanelaJg();
//Posição do dado;
	posDado();
}