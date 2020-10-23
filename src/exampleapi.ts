
import { httpNode } from '../instance';

interface ErrorsResponse {
  code: string;
  detail: string;
  title: string;
}
export default async (params: {courseId: number}): Promise<boolean | ErrorsResponse> => {
  try {
    await httpNode.post('course/participant/accept-policy', params);
    return true;
  } catch (error) {
    return error[0];
  }
};
