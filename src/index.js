const showGreeting = () => {
    const userArg = process.argv.filter((arg) => arg.startsWith('--') && arg.includes('username'));

    if (userArg.length) {
        const userName = userArg[0].split('=')[1];
        console.log(`Welcome to the File Manager, ${userName}!`)
    }
  };
  
  showGreeting();