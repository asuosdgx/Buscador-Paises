export default async function chamarApi(pais) {
  let url = "";
  if (!pais) {
    url = "https://restcountries.com/v3.1/all";
  } else {
    url = `https://restcountries.com/v3.1/name/${pais}`;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        "Erro ao realizar a requisição. Digite o nome de um país e tente novamente."
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Houve um problema:", error);
    throw error;
  }
}
