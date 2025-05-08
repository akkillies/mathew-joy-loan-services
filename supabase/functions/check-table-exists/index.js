exports.handler = async (event, context) => {
  const { table_name } = event.data;

  try {
    const { data: { count } } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public')
      .eq('table_name', table_name)
      .count();

    return {
      statusCode: 200,
      body: count > 0
    };
  } catch (error) {
    console.error('Error checking table existence:', error);
    return {
      statusCode: 500,
      body: { error: 'Failed to check table existence' }
    };
  }
};
