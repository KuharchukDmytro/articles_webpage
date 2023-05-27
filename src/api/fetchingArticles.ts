export function getAllArticles() {
  const fullUrl = 'https://newsapi.org/v2/everything?q=apple&from=2023-05-26&to=2023-05-26&sortBy=popularity&apiKey=c49be2bbdf3d4628b13f56cd38e14a56';

  return fetch(fullUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
}
