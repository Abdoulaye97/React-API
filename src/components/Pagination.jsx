function Pagination({totalsPosts,postsPerPage,onPageChange})

{
  let pages = [];

  for(let i =1;i<=Math.ceil(totalsPosts/postsPerPage); i++)
    {
        pages.push(i);
    }
    return (
      <>

             {
                 pages.map((page, index)=> {
                     return <button key={index} onClick={() => onPageChange}>{page}</button>;
                 })}

      </>
    );
}

export  default Pagination;