var listaNomes = [
  'Capitão América: O Primeiro Vingador',
  'Capitã Marvel',
  'Homem de Ferro',
  'Homem de Ferro 2',
  'O incrível Hulk',
  'Thor',
  'Vingadores',
  'Thor: O Mundo Sombrio',
  'Homem de Ferro 3',
  'Capitão América: O Soldado Invernal',
  'Guardiões da Galáxia',
  'Guardiões da Galáxia Vol.2',
  'Vingadores: A Era de Ultron',
  'Homem-Formiga',
  'Capitão América: Guerra Civil',
  'Viúva Negra',
  'Homem-Aranha: De Volta ao Lar',
  'Pantera Negra',
  'Doutor Estranho',
  'Thor: Ragnarok',
  'Homem-Formiga e a Vespa',
  'Vingadores: Guerra Infinita',
  'Vingadores: Ultimato',
  'Homem-Aranha: Longe de Casa',
  'Shang-Chi e a Lenda dos Dez Anéis'
]

var listaFilmes = [
  'https://resizing.flixster.com/1Rq3s2Ov9qcQAeDkDks5_nrphoE=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8205710_p_v13_ao.jpg',
  'https://resizing.flixster.com/qz6OB1ElBFbdf-be55wLhshJuFo=/fit-in/180x240/v2/https://resizing.flixster.com/ICRuM8e7gYTW-4BgzxD1Kj9mlMU=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzU5ZjVjZTkzLTkwYjEtNDI5My04ZTY0LWMwNGMzM2M0MmYwOS53ZWJw',
  'https://resizing.flixster.com/xPFALLv0zNUkLi_LCPMEkIKhxq4=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p170620_p_v10_an.jpg',
  'https://resizing.flixster.com/51eTdcQ2qlJvhLNEdfJg_KVxVQc=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p3546118_p_v10_af.jpg',
  'https://resizing.flixster.com/oyN95wAqUIPTGnv7Ebxw5vHClzE=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p176337_p_v10_ag.jpg',
  'https://resizing.flixster.com/6bvH1-aBm562YEjx-nT_kkIkMJ0=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p7989358_p_v10_af.jpg',
  'https://resizing.flixster.com/cFLJZUuGxEE_z_paYiz7S1s9To8=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p8815512_p_v10_ap.jpg',
  'https://resizing.flixster.com/I9KQHP0RgV4QKZEKqwJJCULORl8=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p9530219_p_v10_au.jpg',
  'https://resizing.flixster.com/F_9mNICwPN_kv2GKhJaHO1Li-ns=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p9259486_p_v10_af.jpg',
  'https://resizing.flixster.com/ycuWrNPKENinNdf-TGOOIB-fB9c=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p9895254_p_v10_ak.jpg',
  'https://resizing.flixster.com/6xkj1GWAUi7JNLadrOCun-1sXBs=/fit-in/180x240/v2/https://flxt.tmsimg.com/NowShowing/130722/130722_aa.jpg',
  'https://resizing.flixster.com/iyp6xA-JHWxT2HDlsGj2gKM2jSc=/fit-in/180x240/v2/https://resizing.flixster.com/7CsTxYUC9oxLtXmVVSpKp0UCos8=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2IyMWJmYzgxLWMxZGQtNDdjYS1iYTUzLTVkNmQ0YjJkODk1OC53ZWJw',
  'https://resizing.flixster.com/vMZ7cy4KEElb2WqOa8e7sScosY4=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p10745606_p_v10_aq.jpg',
  'https://resizing.flixster.com/f6A4-2Dk3nff7zNGJYi17g3CXTI=/fit-in/180x240/v2/https://resizing.flixster.com/ORJjIqDWZCl2V4KT1jfLNUPD0oo=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzkyOTFlZTI0LWVlYjAtNGU5Ni1iZWY1LWQ3YjI5NWNmN2UzMS53ZWJw',
  'https://resizing.flixster.com/p1nBYqwlWcoJaHGpPdeoxrCmOn4=/fit-in/180x240/v2/https://resizing.flixster.com/WuTR5KccDVIly7EOv6TuaJ2Jidg=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzllZThmOGM5LTVjZmUtNDQ5Yy04ZjdjLTcyOWEzZWI0N2FlZC53ZWJw',
  'https://resizing.flixster.com/2Pb2GucTgjUF2PdRJZ2jdCynmTk=/fit-in/180x240/v2/https://resizing.flixster.com/8Cps_AWwNbk0bMzDtqzwRhccnY0=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzRkMWJjZjI2LWE0MDktNDczZC05ZmNiLTIzMTQ0NTE5MGJiMC5qcGc=',
  'https://resizing.flixster.com/Hy-NtwLUfbC98jbIct0lAzO6gsg=/fit-in/180x240/v2/https://resizing.flixster.com/JwIeXwQ26fpkxO2r3rmGHWvVHBI=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzI3MmIzNGJhLTUxMDAtNDliMS1iMjZkLTc2YzQxM2E3OTFiYi53ZWJw',
  'https://resizing.flixster.com/UqGfi7qJTFlntH7lrAdYPmIcS4Y=/fit-in/180x240/v2/https://resizing.flixster.com/dH6cVqiBByzFjrjLDr9NW9dSdQY=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzMxOGI1YzBhLWMyMjEtNGUxMS1iM2Q0LWQ4OGMyYzQyZjQyYS53ZWJw',
  'https://resizing.flixster.com/X2UtUm06AUaA4qOzFdVM7W0yGiI=/fit-in/180x240/v2/https://resizing.flixster.com/Uxk5xXltDD8d09_qlS1_3cQLzsA=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2NmZDI1NDE5LWE0NmItNGI3YS05YTZhLTk2NTFlM2U5ZWJkNi53ZWJw',
  'https://resizing.flixster.com/a-r7a3MnfC7cqyYH20tfU2vCvu0=/fit-in/180x240/v2/https://resizing.flixster.com/bUks3oAqlmWdDCbYfiyUkZ5GNH4=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzI0NDdkYmJhLTY2MmEtNDY5My04MzMzLTFjMzZhYmM4MDkzZC53ZWJw',
  'https://resizing.flixster.com/eJzKvCNp7DzavDc9lOyhKypVDQU=/fit-in/180x240/v2/https://resizing.flixster.com/mIMdDiMRxAgtv_1rfHhobVOwPns=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzQyNTBjMzY2LWJiMTItNDc3YS04ZDFiLWFiYTcxNzM4NThlZC53ZWJw',
  'https://resizing.flixster.com/8iLTH3QMONvl4smvufpfNu-HxLE=/fit-in/180x240/v2/https://resizing.flixster.com/nYD953eaRxwQdF4TXY5jRu18MGQ=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzM0NGRkMDM2LWVjNDQtNGZlMC04NGM3LWZkMzQ2Njg1OTUyNi53ZWJw',
  'https://resizing.flixster.com/M1G5yI3_n2Bcwsiav2K3Jh5_lXs=/fit-in/180x240/v2/https://resizing.flixster.com/j8RBPQAWUY99VK2IcLRbSdZs0o4=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2QxZjE5ZDgzLTRiY2MtNDFkYS04NWQ4LTRkYzc1ZTAwNWE2NC53ZWJw',
  'https://resizing.flixster.com/Quw7SwebSHzj5JF9YAuBU1i6VIo=/fit-in/180x240/v2/https://resizing.flixster.com/6gPGTgXSvYagw4EMJL_S7_ORRLE=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2M1ZDMzZDMxLTU0MTEtNDc5Yy04NDMyLWU1NWE5MDdkOWFmMy53ZWJw',
  'https://resizing.flixster.com/miiqtWbya0t1e8lU3Uo9WtdW8ok=/fit-in/180x240/v2/https://resizing.flixster.com/o3Oul5Xmgiu8no89gblCUYWJB0s=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzY0NWJhN2RhLTg1Y2YtNDBmYS04YjQ0LWI5MWY4NmIwOGRjMy5qcGc='
]

var linkFilmes = [
  'https://vizer.tv/filme/online/capitao-america-o-primeiro-vingador',
  'https://vizer.tv/filme/online/capita-marvel',
  'https://vizer.tv/filme/online/homem-de-ferro',
  'https://vizer.tv/filme/online/homem-de-ferro-2',
  'https://vizer.tv/filme/online/o-incrivel-hulk',
  'https://vizer.tv/filme/online/thor',
  'https://vizer.tv/filme/online/the-avengers-os-vingadores',
  'https://vizer.tv/filme/online/thor-o-mundo-sombrio',
  'https://vizer.tv/filme/online/homem-de-ferro-3',
  'https://vizer.tv/filme/online/capitao-america-2-o-soldado-invernal',
  'https://vizer.tv/filme/online/guardioes-da-galaxia',
  'https://vizer.tv/filme/online/guardioes-da-galaxia-vol-2',
  'https://vizer.tv/filme/online/vingadores-era-de-ultron',
  'https://vizer.tv/filme/online/homem-formiga',
  'https://vizer.tv/filme/online/capitao-america-guerra-civil',
  'https://vizer.tv/filme/online/viuva-negra',
  'https://vizer.tv/filme/online/homem-aranha-de-volta-ao-lar',
  'https://vizer.tv/filme/online/pantera-negra',
  'https://vizer.tv/filme/online/doutor-estranho',
  'https://vizer.tv/filme/online/thor-ragnarok',
  'https://vizer.tv/filme/online/homem-formiga-e-a-vespa',
  'https://vizer.tv/filme/online/vingadores-guerra-infinita',
  'https://vizer.tv/filme/online/vingadores-ultimato',
  'https://vizer.tv/filme/online/homem-aranha-longe-de-casa',
  'https://vizer.tv/filme/online/shang-chi-e-a-lenda-dos-dez-aneis'
]

for (var i = 0; i < linkFilmes.length; i++) {
  document.write(
    '<a href=' +
      linkFilmes[i] +
      ' target="_blank"><img src=' +
      listaFilmes[i] +
      ' alt="" class=""></a> ' +
      '<p>' +
      listaNomes[i] +
      '</p>'
  )
}
