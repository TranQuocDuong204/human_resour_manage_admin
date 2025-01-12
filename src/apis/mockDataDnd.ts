export const mockDataDemo: any = {
    projects: {
        id: 'project-id-01',
        title: 'AnyJob',
        description: 'Pro  fullstack Course nextjs-fastapi-supabase',
        type: 'public', 
        ownerIds: [], 
        memberIds: [], 
        columnOrderIds: ['column-id-01', 'column-id-02', 'column-id-03'], 
        columns: [
            {
                id: 'column-id-01',
                projectId: 'project-id-01',
                title: 'To Do',
                taskOrderIds: ['task-id-01', 'task-id-02', 'task-id-03', 'task-id-04', 'task-id-05', 'task-id-06', 'task-id-07'],
                tasks: [
                    {
                        id: 'task-id-01',
                        projectId: 'project-id-01',
                        columnId: 'column-id-01',
                        title: 'Task 01',
                        description: 'Markdown Syntax (advanced topic)',
                        cover: 'https://trungquandev.com/wp-content/uploads/2022/07/fair-mern-stack-advanced-banner-trungquandev.jpg',
                        memberIds: ['test-user-id-01'],
                        comments: ['test comment 01', 'test comment 02'],
                        attachments: ['test attachment 01', 'test attachment 02', 'test attachment 03']
                    },
                    { id: 'task-id-02', projectId: 'project-id-01', columnId: 'column-id-01', title: 'Task 02', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { id: 'task-id-03', projectId: 'project-id-01', columnId: 'column-id-01', title: 'Task 03', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { id: 'task-id-04', projectId: 'project-id-01', columnId: 'column-id-01', title: 'Task 04', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { id: 'task-id-05', projectId: 'project-id-01', columnId: 'column-id-01', title: 'Task 05', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { id: 'task-id-06', projectId: 'project-id-01', columnId: 'column-id-01', title: 'Task 06', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { id: 'task-id-07', projectId: 'project-id-01', columnId: 'column-id-01', title: 'Task 07', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
                ]
            },
            {
                id: 'column-id-02',
                projectId: 'project-id-01',
                title: 'In Progress',
                taskOrderIds: ['task-id-08', 'task-id-09', 'task-id-10'],
                tasks: [
                    { id: 'task-id-08', projectId: 'project-id-01', columnId: 'column-id-02', title: 'Task 08', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { id: 'task-id-09', projectId: 'project-id-01', columnId: 'column-id-02', title: 'Task 09', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { id: 'task-id-10', projectId: 'project-id-01', columnId: 'column-id-02', title: 'Task 10', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
                ]
            },
            {
                id: 'column-id-03',
                projectId: 'project-id-01',
                title: 'Done',
                taskOrderIds: ['task-id-11', 'task-id-12', 'task-id-13'],
                tasks: [
                    { id: 'task-id-11', projectId: 'project-id-01', columnId: 'column-id-03', title: 'Task 11', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { id: 'task-id-12', projectId: 'project-id-01', columnId: 'column-id-03', title: 'Task 12', description: null, cover: null, memberIds: [], comments: [], attachments: [] },
                    { id: 'task-id-13', projectId: 'project-id-01', columnId: 'column-id-03', title: 'Task 13', description: null, cover: null, memberIds: [], comments: [], attachments: [] }
                ]
            }
        ]
    }
};
