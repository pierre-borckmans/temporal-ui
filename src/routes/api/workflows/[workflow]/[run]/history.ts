const apiHost = process.env.TEMPORAL_API_HOST || 'http://localhost:8088';

export async function get({ params, query }) {
  const { workflow: workflowId, run: runId } = params;

  const response = await fetch(
    `${apiHost}/api/namespaces/default/workflows/${workflowId}/${runId}/history?{query}`,
  );

  const history = await response.json();

  return {
    body: {
      ...history,
    },
  };
}
