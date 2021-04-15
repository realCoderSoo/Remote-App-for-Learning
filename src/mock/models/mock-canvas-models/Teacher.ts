export class MockTeacher {
    id: string;
    name: string;
    sortable_name: string;
    short_name: string;
    enrollments: {
        id: number;
        course_id: string;
        course_section_id: number;
        section_integration_id: string; 
        enrollment_state: string;
        limit_privileges_to_course_section: boolean;
        root_account_id: number;
        type: string;
        user_id: string;
        associated_user_id: string;
        role: string;
        role_id: number;
        created_at: string;
        updated_at: string;
        start_at: string;
        end_at: string;
        last_activity_at: string;
        last_attended_at: string;
        total_activity_time: number;
        html_url: string;
        grades: {
            html_url: string;
            current_score: number;
            current_grade: string;
            final_score: number;
            final_grade: string;
        }
        user: {
            id: number;
            name: string;
            sortable_name: string;
            short_name: string;
        }
        override_grade: string;
        override_score: number;
        unposted_current_grade: string;
        unposted_final_grade: string;
        unposted_current_score: string;
        unposted_final_score: string;
        current_period_override_grade: string;
        current_period_override_score: number;
    }
    sis_user_id: string;
    sis_import_id: number;
    integration_id: string;
    login_id: string;
    avatar_url: string;
}