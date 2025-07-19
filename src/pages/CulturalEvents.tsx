useEffect(() => {
  if (isSubmitted) {
    // Delay scroll slightly to ensure DOM and layout are fully rendered
    const timeout = setTimeout(() => {
      confirmationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100); // 100–200ms works well across devices

    return () => clearTimeout(timeout);
  }
}, [isSubmitted]);
