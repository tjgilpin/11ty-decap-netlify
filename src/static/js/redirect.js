  const currentHash = window.location.hash;
  if (currentHash.includes("_token")) {
    window.location.href = "/admin/" + currentHash;
  }
