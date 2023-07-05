/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import axiosInstance from '@/infrastructure/api/axiosClient';
import ResourceService from '@/infrastructure/services/ResourceService';

const axiosInstance = axios.create();
const data = [
  {
    id: '1',
    id_number: '123',
    status: 'Rejected',
    resume: 'resume.pdf',
    job: {
      id: 'job1',
      job_title: 'Software Developer',
      skill_category: 'Programming',
    },
    candidate: {
      id: 'candidate1',
      full_name: 'John Doe',
    },
  },
  {
    id: '2',
    id_number: '456',
    status: 'Withdrawn',
    resume: 'resume.pdf',
    job: {
      id: 'job2',
      job_title: 'Data Analyst',
      skill_category: 'Analytics',
    },
    candidate: {
      id: 'candidate2',
      full_name: 'Jane Smith',
    },
  },
  {
    id: '3',
    id_number: '789',
    status: 'Rejected',
    resume: null,
    job: {
      id: 'job3',
      job_title: 'UX Designer',
      skill_category: 'Design',
    },
    candidate: {
      id: 'candidate3',
      full_name: 'Emily Johnson',
    },
  },
  {
    id: '4',
    id_number: '987',
    status: 'Rejected',
    resume: 'resume.pdf',
    job: {
      id: 'job4',
      job_title: 'Marketing Manager',
      skill_category: 'Marketing',
    },
    candidate: {
      id: 'candidate4',
      full_name: 'Michael Brown',
    },
  },
  {
    id: '5',
    id_number: '654',
    status: 'Revision Required',
    resume: 'resume.pdf',
    job: {
      id: 'job5',
      job_title: 'Financial Analyst',
      skill_category: 'Finance',
    },
    candidate: {
      id: 'candidate5',
      full_name: 'Olivia Davis',
    },
  },
  {
    id: '6',
    id_number: '321',
    status: 'Completed',
    resume: 'resume.pdf',
    job: {
      id: 'job6',
      job_title: 'Graphic Designer',
      skill_category: 'Design',
    },
    candidate: {
      id: 'candidate6',
      full_name: 'William Johnson',
    },
  },
  {
    id: '7',
    id_number: '987',
    status: 'Revision Required',
    resume: 'resume.pdf',
    job: {
      id: 'job7',
      job_title: 'Sales Representative',
      skill_category: 'Sales',
    },
    candidate: {
      id: 'candidate7',
      full_name: 'Sophia Thompson',
    },
  },
];

function transformData(data: any) {
  return data.map((item: any) => {
    return {
      id: item.id,
      idNumber: item.id_number,
      status: item.status,
      resume: item.resume,
      jobTitle: item.job.job_title,
      jobId: item.job.id,
      skillCategory: item.job.skill_category,
      candidateName: item.candidate.full_name,
    };
  });
}

const mock = new MockAdapter(axiosInstance, { delayResponse: 2000 });

mock.onGet('/submissions/readAll').reply(200, {
  data: transformData(data),
});

mock.onPut('/submissions/3/isActive/toggle').reply(400);

// TILL HERE
const service = new ResourceService(axiosInstance, 'submissions');
export default service;
