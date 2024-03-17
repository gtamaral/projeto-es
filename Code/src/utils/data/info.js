const CATEGORIAS_GASTOS = [
  {
    title: "Saúde",
    data: [
      { id: "1", title: "Consulta médica", value: 150.0, description: "Consulta com clínico geral." },
      { id: "2", title: "Medicamentos", value: 90.0, description: "Remédios para tratamento mensal." },
      { id: "3", title: "Plano de saúde", value: 300.0, description: "Mensalidade do plano de saúde." },
      { id: "4", title: "Exames", value: 200.0, description: "Exames de rotina." },
      { id: "5", title: "Dentista", value: 250.0, description: "Consulta e limpeza dentária." },
    ],
  },
  {
    title: "Alimentação",
    data: [
      { id: "6", title: "Supermercado", value: 600.0, description: "Compras mensais de alimentos." },
      { id: "7", title: "Refeições escolares", value: 120.0, description: "Almoço das crianças na escola." },
      { id: "8", title: "Jantar fora", value: 150.0, description: "Jantar em família fora de casa." },
      { id: "9", title: "Lanches", value: 80.0, description: "Lanches e snacks para a família." },
      { id: "10", title: "Suplementos", value: 200.0, description: "Suplementos alimentares." },
    ],
  },
  {
    title: "Casa",
    data: [
      { id: "11", title: "Aluguel", value: 800.0, description: "Mensalidade do aluguel da casa." },
      { id: "12", title: "Energia elétrica", value: 120.0, description: "Conta de luz." },
      { id: "13", title: "Água", value: 80.0, description: "Conta de água." },
      { id: "14", title: "Internet", value: 100.0, description: "Mensalidade da internet." },
      { id: "15", title: "Manutenção doméstica", value: 150.0, description: "Reparos e manutenções na casa." },
    ],
  },
  {
    title: "Outros",
    data: [
      { id: "16", title: "Transporte", value: 300.0, description: "Gastos com transporte público e particular." },
      { id: "17", title: "Educação", value: 400.0, description: "Material escolar e cursos extras." },
      { id: "18", title: "Lazer", value: 250.0, description: "Atividades de lazer para a família." },
      { id: "19", title: "Vestuário", value: 200.0, description: "Compra de roupas e calçados." },
      { id: "20", title: "Poupança", value: 200.0, description: "Valor destinado à poupança mensal." },
    ],
  },
];

// Para acessar todas as categorias diretamente, caso necessário:
const CATEGORIAS = CATEGORIAS_GASTOS.map((categoria) => categoria.title);

const CATEGORIAS_GASTOS_COM_TOTAL = CATEGORIAS_GASTOS.map(categoria => ({
  ...categoria,
  totalValue: categoria.data.reduce((acc, curr) => acc + curr.value, 0),
}));

export { CATEGORIAS_GASTOS, CATEGORIAS, CATEGORIAS_GASTOS_COM_TOTAL };
